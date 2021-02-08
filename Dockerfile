# Use the current Node LTS (Long Term Support)
FROM node:14.15.1-buster-slim as base
# Install packages required for building the app
# RUN apt update && apt install -y git python make build-essential
# Set the working directory
WORKDIR /app
# Copy package.json to install dependencies
COPY package.json .
# Execute npm to actually install dependencies
RUN npm install


# Use the build stage to run unit tests
FROM base as unit-test
# Copy tests directory
#COPY tests .
# Execute npm to actually run test:unit script
# TODO Uncomment the line below when the unit test is passing.
#RUN npm run test:unit


# Use the current stable nginx image for production stage
FROM base as production
# Copy specific files and folders from source to the dest path in the image's filesystem.
COPY bin bin
COPY public public
COPY routes routes
COPY utils utils
COPY views views
COPY contracts contracts
COPY *.js *.json ./
# Set enviroment variables for mongo
ENV APP_PORT 3000
ENV APP_NETWORK homestead
ENV APP_WSS_URL .
ENV APP_TOTAL_SUPPLY .
ENV APP_REST_AMOUNT .
ENV APP_ETHERSCAN_API .
# Define the network port that this container will listen on at runtime.
EXPOSE ${APP_PORT}
# Define the command to run at runtime
CMD [ "npm", "start" ]
