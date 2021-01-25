# Use the current Node LTS (Long Term Support)
FROM node:14.15.4-alpine as base
#--------- STAGE BUILD ---------#
# Use the base stage to produce a build
FROM base AS build
# Set the working directory
WORKDIR /app
# Copy package.json to install dependencies
COPY . .
# Execute npm to actually install dependencies
RUN npm ci --only=production
EXPOSE 3000

FROM build as production
RUN chown -R node:node ./
USER node

CMD ["npm", "start"]
