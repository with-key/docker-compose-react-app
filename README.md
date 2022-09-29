## 웹 배포 구성

### Docker-compose

    - reverse proxy server : nginx (1.18.0)
    - web server : nginx, express (nextjs)
    - web application server (WAS) : nestjs
    - database : postgres:14
    - node : node:16-alpine

### [Flow](https://www.figma.com/file/s21PV3PjwcfJZnFSBpitax/nginx-flow?node-id=0%3A1)
![image](https://user-images.githubusercontent.com/66957178/192985112-8c106d49-3136-41e0-a62a-0541a85bd250.png)
![image](https://user-images.githubusercontent.com/66957178/192985349-b73b1ac4-5787-4c78-a5bd-9f045c5966cd.png)




