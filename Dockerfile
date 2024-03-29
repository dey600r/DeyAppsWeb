FROM node:18.16.0-alpine3.17

USER root
RUN npm install -g http-server

USER node
RUN mkdir -p /home/node/app /tmp/app
WORKDIR /tmp/app

COPY --chown=node . .

ENV NODE_OPTIONS=--max-old-space-size=1024
RUN echo "NodeJS $(node -v) memory config:" && node -p "v8.getHeapStatistics()"
RUN npm i
RUN npm run build && mv dist/DeyApps/* /home/node/app && rm -fr /tmp/app

WORKDIR /home/node/app

EXPOSE 8080

CMD [ "http-server", "./" ]