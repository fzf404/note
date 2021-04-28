<!-- 
title: Php
sort: 
--> 

```bash
apt install php-fpm nginx

# nginx
location ~ \.php$ {
	include snippets/fastcgi-php.conf;
	# With php-fpm (or other unix sockets):
	fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
	# With php-cgi (or other tcp sockets):
	#       fastcgi_pass 127.0.0.1:9000;
}

# wecenter
apt install php-gd php-mysql php-curl
```

