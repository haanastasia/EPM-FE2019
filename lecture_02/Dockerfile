FROM ubuntu:16.04

RUN  apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    nginx

CMD ["nginx", "-g", "daemon off;"]