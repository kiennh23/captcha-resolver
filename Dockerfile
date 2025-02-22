FROM node:20-slim

RUN npm install pm2 -g

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["pm2-runtime", "start", "index.js", "--name", "captcha-resolver-tdt"]