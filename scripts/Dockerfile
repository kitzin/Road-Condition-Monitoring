FROM ubuntu:16.04

ARG elasticsearch_ip

ENV DEBIAN_FRONTEND noninteractive
ENV ELASTICSEARCH $elasticsearch_ip

RUN apt-get update -q \
	&& apt-get install -yq \
		apt-utils \
		curl

RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get update -q && \
	apt-get install -yq \
		nodejs

WORKDIR /opt/rcm-pull
COPY . .
RUN npm install

CMD ["npm", "start"]
