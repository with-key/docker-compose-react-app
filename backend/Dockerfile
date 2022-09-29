FROM node:16

WORKDIR /app/backend/nest

COPY package.json ./

RUN npm install --save --legacy-peer-deps

COPY ./ ./

RUN npm run build

CMD [ "npm", "run", "start:prod" ]