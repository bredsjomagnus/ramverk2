FROM node:6.11.5
MAINTAINER Magnus Andersson (magnusandersson076@gmail.com)
# ENV DBWEBB_PORT=8006
# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
# For npm@5 or later, copy package-lock.json as well
# COPY package-lock.json .

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
# COPY . .

EXPOSE 3000
# CMD [ "npm", "start" ]
