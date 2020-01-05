FROM node:12.14.0-alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

CMD npm start

EXPOSE 4200
