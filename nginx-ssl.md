1. 创建单独的站点配置文件 `/etc/nginx/conf.d/resource.windlliu.conf`

2. 加载此单独域名的ssl证书
在这个文件夹下 /root/certs/resource.windlliu.com 有ssl证书文件
- resource.windlliu.com.key
- resource.windlliu.com.pem

3. 将resource.windlliu.com 这个域名的 http/https请求导向 静态资源地址(需调整dist)
- 将 `dist`下的内容全部 移动到 `/var/www/html/resource-shop`
- 修改 `/var/www/html/resource-shop` 目录权限755