# RUN npm config set proxy http://psdm104zatcrh.vodacom.corp:3128
# RUN npm config set https-proxy http://psdm104zatcrh.vodacom.corp:3128

#PULL LATEST-ALPINE DOCKER IMAGE
FROM keymetrics/pm2:latest-alpine

# SET WORK DIRECTORY
WORKDIR /microservice

# CREATE GLOBAL ENVIRONMENT VARIABLES
ARG PORT
ARG MONGO_URI
ARG ENVIRONMENT

# SET GLOBAL ENVIRONMENT VARIABLES
ENV PORT=$PORT
ENV MONGO_URI=$MONGO_URI
ENV ENVIRONMENT=$ENVIRONMENT

# COPY FOLDERS
COPY src /microservice/src/
#COPY FILES
COPY package.json /microservice
COPY .env.$ENVIRONMENT /microservice
COPY pm2.json /microservice
COPY tsconfig.json /microservice

# INSTALL NPM PACKAGES
RUN npm i

#BUILD SOLUTION
RUN npm run build

# REMOVE FOLDERS & FILES NOT NEEDED
RUN rm -rf src/ && rm package.json && rm package-lock.json && rm tsconfig.json

# Expose port
EXPOSE $PORT

# RUN SERVER WITH PM2
CMD pm2-runtime start pm2.json --env $ENVIRONMENT