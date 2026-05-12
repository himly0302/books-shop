1. 创建单独的站点配置文件 `/etc/nginx/conf.d/resource.windlliu.conf`

2. 加载此单独域名的ssl证书
在这个文件夹下 /root/certs/resource.windlliu.com 有ssl证书文件
- resource.windlliu.com.key
- resource.windlliu.com.pem

3. 将resource.windlliu.com 这个域名的 http/https请求导向 静态资源地址`dist`
- 如果需要迁移到其他地方, 包裹文件的文件夹名为 "resource-shop"