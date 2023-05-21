FROM node:latest
RUN mkdir -p /app/your_app
WORKDIR /app/your_app
COPY package*.json /app
RUN cd /app && npm install
EXPOSE 3000-3100
# CMD ["npm", "start"]
