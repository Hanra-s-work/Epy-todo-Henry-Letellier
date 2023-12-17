FROM node:latest
WORKDIR /app
RUN mkdir -p /your_app
COPY ./your_app/package*.json ./
RUN npm install
RUN npm install cors --save
COPY ./your_app /app/your_app
EXPOSE 3000-3100
# CMD ["npm", "start"]
