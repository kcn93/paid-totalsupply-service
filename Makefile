SHELL=/bin/bash

include .env
export

.PHONY: up
up: build network run

.PHONY: build
build:
	docker build -t paid-api --target production .

.PHONY: network
network:
	docker network inspect paid-net &> /dev/null; \
    	if [ $$? -ne 0 ]; then docker network create paid-net ; fi

.PHONY: run
run:
	docker container run -d \
     	--name paid-nodejs-api \
        -e SENDGRID_API_KEY=${SENDGRID_API_KEY} \
      	--network paid-net \
      	-p 3000:3000 paid-api

.PHONY: shell
shell:
	docker exec -it paid-nodejs-api sh

.PHONY: stop
stop:
	docker stop paid-nodejs-api

.PHONY: start
start:
	docker start paid-nodejs-api

.PHONY: down
down:
	docker stop paid-nodejs-api
	docker rm paid-nodejs-api
	docker network rm paid-net
