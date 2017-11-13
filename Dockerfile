FROM node:6.11.5
MAINTAINER Magnus Andersson (magnusandersson076@gmail.com)
# ENV DBWEBB_PORT=8006
# Create app directory
WORKDIR /var/www/html

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package-lock.json .

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "npm", "start" ]
