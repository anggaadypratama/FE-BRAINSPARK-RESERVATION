# Multi-stage

FROM node:alpine AS build

WORKDIR /app

COPY . .
RUN yarn install && yarn build

# nginx state for serving content
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d


EXPOSE 80
CMD ["nginx","-g","daemon off;"]