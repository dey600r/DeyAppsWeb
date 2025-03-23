# Stage 1: Compile and Build angular codebase
FROM node:20.13.1-alpine3.19 AS build

USER node
WORKDIR /app
RUN echo "INSTALL LIBRARIES"
COPY --chown=node package*.json ./
RUN npm install

RUN echo "BUILD PROD"
COPY --chown=node . .
RUN npm run build --prod

# Stage 2: Serve app with angular node ssr
FROM node:20.13.1-alpine3.19

USER node
RUN mkdir -p /home/node/app

WORKDIR /home/node/app
COPY --from=build /app/dist/DeyApps/ ./
EXPOSE 4000
CMD ["node", "server/server.mjs"]