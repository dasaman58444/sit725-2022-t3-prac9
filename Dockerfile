FROM node:16-alpine
#From node
# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /sit725-2022-t3-prac9

#this allows for caching
COPY . .

#which user is creating this


EXPOSE 8080

RUN npm install
CMD [ "npm", "start" ]







