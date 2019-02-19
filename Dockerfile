FROM node:10.13-alpine AS build
WORKDIR /srv
COPY package*.json ./
RUN npm install

FROM node:10.13-alpine
WORKDIR /usr/src/app
COPY --from=build /srv .
COPY . .
EXPOSE 4000
CMD ["npm", "start"]


