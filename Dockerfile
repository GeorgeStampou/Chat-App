FROM node:18.18.0

COPY . /app/

WORKDIR /app

RUN npm install

CMD ["node", "server.js"]
