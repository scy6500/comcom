FROM node:14

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app
RUN npm install

COPY . /app

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]