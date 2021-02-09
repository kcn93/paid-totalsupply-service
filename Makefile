SHELL=/bin/bash

include .env
export

.PHONY: up
up: build network run

.PHONY: build
build:
	docker build -t paid-totalsupply-service --target=production .

.PHONY: network
network:
	docker network inspect paid-net &> /dev/null; \
    	if [ $$? -ne 0 ]; then docker network create paid-net ; fi

.PHONY: run
run:
	source .env && docker container run -d \
     	--name paid-totalsupply-service \
      	--network paid-net \
		-e APP_TOTAL_SUPPLY=${APP_TOTAL_SUPPLY} -e APP_REST_AMOUNT=${APP_REST_AMOUNT} \
      	-p 3000:3000 paid-totalsupply-service

.PHONY: down
down:
	docker container rm -f paid-totalsupply-service

.PHONY: logs
logs:
	docker logs -f --tail 10 paid-totalsupply-service