FROM nginx:latest
# COPY ./server_data/conf/*.conf /etc/nginx/
RUN apt update -y && apt upgrade -y
RUN apt-get install -y net-tools curl
RUN apt-get install -y iputils-ping
RUN apt-get install -y nano
RUN mkdir -p /error
EXPOSE 80 8080-8090
