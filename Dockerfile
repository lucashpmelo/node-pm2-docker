FROM node:13.11.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "deploy" ]