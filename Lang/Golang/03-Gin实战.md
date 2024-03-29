<!--
title: 03-Gin实战
sort:
-->

> 使用 Gin 框架开发

```bash
# 环境准备
mkdir goLearn
cd goLearn
# 使用mod管理依赖
go mod init goLearn
# 安装gin框架
go get -u github.com/gin-gonic/gin
```

## Gin

> [HelloWorld](http://localhost:8080/ping)

```go
package main

import "github.com/gin-gonic/gin"

func main() {
    // 初始化Gin框架，创建实例r
	r := gin.Default()
    // 绑定子页, 提供响应函数
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
    // 异常处理
    panic(r.Run())
}
```

## 用户注册

> 使用`gorm`连接数据库
>
> ==踩坑==：`gorm2`不兼容此写法

```go
package main

import (
	"fmt"
	"log"
	"math/rand"
"time"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/go-sql-driver/mysql"
)

// Table的结构
type User struct {
	gorm.Model
	Name     string `gorm:"type:varchar(20);not null`
	Sex      bool    `gorm:"type:bool;not null"`
	Password string `gorm:"size:255;not null`
}

func main() {

	// 初始化数据库
	db := InitDB()
	// 延迟关闭
	defer db.Close()

	// gin初始化
	r := gin.Default()
	// 监听 处理函数得到一个gin.Context指针{上下文}
	r.POST("/api/register", func(ctx *gin.Context) {
		// Get data
		name := ctx.PostForm("name")
		sex := ctx.PostForm("sex")
		passwd := ctx.PostForm("passwd")
		sex_num := true
		// Confirm data
		if sex == "1" {
			sex_num = true
		} else if sex == "0" {
			sex_num = false
		} else {
			// gin.H()生成map对象
			ctx.JSON(422, gin.H{
				// 另外一种写法
				// http.StatusUnprocessableEntity, map[string]interface{}{"code"...}
				"code": 422, "msg": "你是外星人吗？",
			})
			return
		}

		if len(passwd) < 6 {
			ctx.JSON(422, gin.H{
				"code": 422, "msg": "密码太短了！",
			})
			return
		}

		if len(name) == 0 {
			// 随机用户名
			name = RandomString(10)
		}

		if isNameExist(db, name) {
			ctx.JSON(422, gin.H{
				"code": 422, "msg": "用户名已存在",
			})
			return
		}

		newUser := User{
			Name:     name,
			Sex:      sex_num,
			Password: passwd,
		}
		// 创建用户
		db.Create(&newUser)
		// 调试打印信息
		log.Println(name, sex, passwd)
		ctx.JSON(200, gin.H{
			"code": 200, "msg": "注册成功",
		})

	})
	panic(r.Run())
}
// 判断用户是否存在 传入db指针 用户名 返回bool值
func isNameExist(db *gorm.DB, name string) bool {
	// 创建结构体
	var user User
	// 使用where name=<input_name>判断 user结构体解析数据
	db.Where("name = ?", name).First(&user)
	if user.ID != 0 {
		return true
	}
	return false
}
// 生成随机数 从letters中随机
func RandomString(n int) string {

	letters := []byte("asdfghjklzxcvbnmqwertyuiopASDFGHJKLZXCVBNMQWERTYUIOP")
	result := make([]byte, n)

	rand.Seed(time.Now().Unix())

	for i := range result {
		result[i] = letters[rand.Intn(len(letters))]
	}
	return string(result)
}

// 连接
func InitDB() *gorm.DB {
	driverName := "mysql"
	host := "localhost"
	port := "3306"
	username := "root"
	password := "1234"
    // 建立此数据库
	database := "fzf404"
	charset := "utf8"
	// 连接信息格式化
	args := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=true",
		username,
		password,
		host,
		port,
		database,
		charset,
	)
	println(args)
	// 打开连接
	db, err := gorm.Open(driverName, args)
	// 错误处理
	if err != nil {
		panic("failed to connect databas. err:" + err.Error())
	}
	// Auto创建表
	db.AutoMigrate(&User{})

	return db
}
```

## 重构分离

> `main.go`

```go
package main

import (
	"goLearn/common"
	"goLearn/route"

	"github.com/gin-gonic/gin"
)

func main() {

	// 初始化数据库
	db := common.InitDB()
	// 延迟关闭
	defer db.Close()

	// gin初始化
	r := gin.Default()
	r = route.CollectRoute(r)
	// 监听 处理函数得到一个gin.Context指针{上下文}

	panic(r.Run())

}
```

> `route.go`

```go
package route

import (
	"goLearn/controller"

	"github.com/gin-gonic/gin"
)

func CollectRoute(r *gin.Engine) *gin.Engine {
	r.POST("/api/register", controller.Register)
	return r
}
```

> `database.go`

```go
package database

import (
	"fmt"

	"goLearn/model"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

var DB *gorm.DB

func InitDB() *gorm.DB {
	driverName := "mysql"
	host := "localhost"
	port := "3306"
	username := "root"
	password := "1234"
    // 别忘了建这个数据库
	database := "fzf404"
	charset := "utf8"
	// 连接信息格式化
	args := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=true",
		username,
		password,
		host,
		port,
		database,
		charset,
	)
	println(args)
	// 打开连接
	db, err := gorm.Open(driverName, args)
	// 错误处理
	if err != nil {
		panic("failed to connect databas. err:" + err.Error())
	}
	// Auto创建表
	db.AutoMigrate(&model.User{})
	DB = db
	return db
}

func GetDB() *gorm.DB {
	return DB
}
```

> `userController`

```go
package controller

import (
	"log"

	"goLearn/database"
	"goLearn/model"
	"goLearn/util"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func Register(ctx *gin.Context) {
	DB := database.GetDB()
	// Get data
	name := ctx.PostForm("name")
	sex := ctx.PostForm("sex")
	passwd := ctx.PostForm("passwd")
	sex_num := true
	// Confirm data
	if sex == "1" {
		sex_num = true
	} else if sex == "0" {
		sex_num = false
	} else {
		// gin.H()生成map对象
		ctx.JSON(422, gin.H{
			// 另外一种写法
			// http.StatusUnprocessableEntity, map[string]interface{}{"code"...}
			"code": 422, "msg": "你是外星人吗？",
		})
		return
	}

	if len(passwd) < 6 {
		ctx.JSON(422, gin.H{
			"code": 422, "msg": "密码太短了！",
		})
		return
	}

	if len(name) == 0 {
		// 随机用户名
		name = util.RandomString(10)
	}

	if isNameExist(DB, name) {
		ctx.JSON(422, gin.H{
			"code": 422, "msg": "用户名已存在",
		})
		return
	}

	newUser := model.User{
		Name:     name,
		Sex:      sex_num,
		Password: passwd,
	}
	// 创建用户
	DB.Create(&newUser)
	// 调试打印信息
	log.Println(name, sex, passwd)
	ctx.JSON(200, gin.H{
		"code": 200, "msg": "注册成功",
	})
}

// 判断用户是否存在 传入db指针 用户名 返回bool值
func isNameExist(db *gorm.DB, name string) bool {
	// 创建结构体
	var user model.User
	// 使用where name=<input_name>判断 user结构体解析数据
	db.Where("name = ?", name).First(&user)
	if user.ID != 0 {
		return true
	}
	return false
}

```

> `util.go`

```go
package util

import (
	"math/rand"
	"time"
)

func RandomString(n int) string {

	letters := []byte("asdfghjklzxcvbnmqwertyuiopASDFGHJKLZXCVBNMQWERTYUIOP")
	result := make([]byte, n)

	rand.Seed(time.Now().Unix())

	for i := range result {
		result[i] = letters[rand.Intn(len(letters))]
	}
	return string(result)
}

```

> `user.go`

```go
package model

import "github.com/jinzhu/gorm"

// Table的结构
type User struct {
	gorm.Model
	Name     string `gorm:"type:varchar(20);not null`
	Sex      bool   `gorm:"type:bool;not null"`
	Password string `gorm:"size:255;not null`
```
