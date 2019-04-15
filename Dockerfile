FROM node:10.13-alpine
WORKDIR /srv
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]