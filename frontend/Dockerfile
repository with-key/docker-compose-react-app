FROM node:16

WORKDIR /app/frontend/next

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

CMD [ "npm", "run", "start" ]
