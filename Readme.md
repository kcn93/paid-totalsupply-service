## Instructions to run locally
### Dependencies
- Docker
- make
- bash
### Env variables 
Copy `.env.example` to `.env` and replace to the proper values

### Run
```shell script
make up
```
After that, visit http://localhost:3000

### Stop container
```shell script
make stop
```

### Start container
```shell script
make start
```

### Access to shell container
```shell script
make shell
```

### Delete container
```shell script
make down
```

## API
### send new agreement email
```shell script
curl --location --request POST 'http://localhost:3000/email/new-agreement' \
--header 'Content-Type: application/json' \
--data-raw '{"counterParty": { "email": "edgard@master.ventures", "name": "Edgard"}, "party": {"name": "Ruben"}}'
```
edgard@master.ventures will receive an email, alerting that Ruben is requesting a new agreement 
