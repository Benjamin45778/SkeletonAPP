# Etapa de build
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build  # genera /www

# Etapa de ejecución con Nginx
FROM nginx:alpine
COPY --from=build /app/www /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
