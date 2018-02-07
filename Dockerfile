FROM node:8

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY server/* ./server/

COPY ui/build ./ui/build

COPY run.sh ./run.sh

EXPOSE 8020
CMD [ "yarn",  "start" ]
