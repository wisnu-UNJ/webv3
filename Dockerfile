ARG VERSION=22.04
FROM ubuntu:${VERSION}
RUN apt update -y && apt install nginx -y && /etc/init.d/nginx start
COPY webv3 /var/www/html
RUN chmod -R 777 /var/www/html

CMD ["nginx", "-g", "daemon off;"]
