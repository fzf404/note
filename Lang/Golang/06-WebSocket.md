<!-- 
title: 06-WebSocket
sort: 
--> 

## HelloWorld

- server

```go
package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{}

func socketHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("Error during connetion upgradation", err)
		return
	}
	defer conn.Close()

	for {
		messageType, message, err := conn.ReadMessage()
		if err != nil {
			log.Println("Error during message reading", err)
			break
		}
		log.Printf("Received: %s", message)
		err = conn.WriteMessage(messageType, message)
		if err != nil {
			log.Println("Error during message writing", err)
			break
		}
	}
}

func home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "IndexPage")
}

func main() {
	http.HandleFunc("/", home)
	http.HandleFunc("/socket", socketHandler)
	log.Println("Server Listen in 127.0.0.1:8080")
	log.Fatal(http.ListenAndServe(("localhost:8080"), nil))
}
```

- client

```go
package main

import (
	"log"
	"os"
	"os/signal"
	"time"

	"github.com/gorilla/websocket"
)

var done chan interface{}
var interrupt chan os.Signal

// 接收处理
func receiveHandler(connection *websocket.Conn) {
	defer close(done)
	for {
		_, msg, err := connection.ReadMessage()
		if err != nil {
			log.Println("Error in receive:", err)
			return
		}
		log.Printf("Received: %s\n", msg)
	}
}

func main() {
	done = make(chan interface{})    // 指示接收断开
	interrupt = make(chan os.Signal) // 指示系统中断

	signal.Notify(interrupt, os.Interrupt) // 注意Ctrl+C

	// 连接
	socketUrl := "ws://localhost:8080" + "/socket"
	conn, _, err := websocket.DefaultDialer.Dial(socketUrl, nil)
	if err != nil {
		log.Fatal("Error connecting to Websocket Server:", err)
	}
	defer conn.Close()
	// 新线程中运行接收
	go receiveHandler(conn)

	for {
		select {
		case <-time.After(time.Duration(1)*time.Second + time.Duration(1)*time.Millisecond*500):
			// 1s发送给一次信息 持续时间，毫秒，1000
			err := conn.WriteMessage(websocket.TextMessage, []byte("Hello from GolangDocs!"))
			if err != nil {
				log.Println("Error during writing to websocket:", err)
				return
			}

		case <-interrupt:
			// 中断
			log.Println("Received SIGINT interrupt signal. Closing all pending connections")

			// 关闭连接
			err := conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(websocket.CloseNormalClosure, ""))
			if err != nil {
				log.Println("Error during closing websocket:", err)
				return
			}

			select {
			case <-done:
				// 断开连接成功
				log.Println("Receiver Channel Closed! Exiting....")
			case <-time.After(time.Duration(1) * time.Second):
				// 断开超时
				log.Println("Timeout in closing receiving channel. Exiting....")
			}
			return
		}
	}
}

```

