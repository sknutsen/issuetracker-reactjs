FROM node:14
WORKDIR /usr/src/issuetracker-frontend
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run start"]