# Stage 1: Compile and Build angular codebase

FROM node:18.16.0-alpine3.17 as build

WORKDIR /app
RUN echo "INSTALL LIBRARIES"
COPY package*.json ./
RUN npm install

RUN echo "BUILD PROD"
COPY --chown=node . .
RUN npm run build --prod

# Stage 2: Serve app with nginx server
FROM nginxinc/nginx-unprivileged

#COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx-def.conf /etc/nginx/conf.d/default.conf

#WORKDIR /code

COPY --from=build /app/dist/DeyApps/ /usr/share/nginx/html

EXPOSE 8080:8080
CMD ["nginx", "-g", "daemon off;"]
