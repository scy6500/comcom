FROM node:14

WORKDIR /usr/src/comcom

COPY package*.json /usr/src/comcom/
RUN npm install

COPY . /usr/src/comcom/

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]
