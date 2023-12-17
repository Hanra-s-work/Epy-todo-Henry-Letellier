FROM nginx:latest
# COPY ./server_data/conf/*.conf /etc/nginx/
RUN apt update -y && apt upgrade -y
RUN apt-get install -y net-tools curl
RUN apt-get install -y iputils-ping
RUN apt-get install -y nano
RUN mkdir -p /error
COPY ./your_html /usr/share/nginx/html
COPY ./server_data/conf/default.conf /etc/nginx/conf.d/default.conf
COPY ./server_data/logs /var/log/nginx/
COPY ./server_data/bin /usr/local/nginx
COPY ./server_data/ssl /etc/nginx/ssl
COPY ./server_data/404/index.html /usr/share/nginx/html/404.html
EXPOSE 80 8080-8090
