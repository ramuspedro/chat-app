FROM node:9

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

CMD node dist/index.js

EXPOSE 8081