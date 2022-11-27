FROM node:16

WORKDIR /usr/src

COPY . .

EXPOSE 3000

RUN npm i && npm run build

CMD ["npm", "run", "start"]