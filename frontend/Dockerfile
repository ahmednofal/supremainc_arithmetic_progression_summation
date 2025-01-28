FROM node:20-alpine

WORKDIR /app

# Add python and other dependencies needed by node-gyp
RUN apk add --no-cache python3 make g++

COPY package*.json ./

# Install all dependencies including devDependencies
RUN npm install

# We don't need COPY . . because we're using volumes in docker-compose
# for hot reloading

EXPOSE 3000

# Command is specified in docker-compose.yml 