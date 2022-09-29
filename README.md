## 웹 배포 구성

### Docker-compose

    - reverse proxy server : nginx (1.18.0)
    - web server : nginx, express (nextjs)
    - web application server (WAS) : nestjs
    - database : postgres:14
    - node : node:16-alpine

### [Flow](https://www.figma.com/file/s21PV3PjwcfJZnFSBpitax/nginx-flow?node-id=0%3A1)
![image](https://user-images.githubusercontent.com/66957178/192981830-be770edb-801e-4c13-96da-1ba845efa4fd.png)
