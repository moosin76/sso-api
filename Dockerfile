FROM node:16
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
COPY config_docker.js config.js
EXPOSE 3000
CMD ["npm", "run", "start"]

