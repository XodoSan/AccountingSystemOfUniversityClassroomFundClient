# Stage 1: Build an Angular Docker Image
FROM node as build
WORKDIR /app
COPY . .
COPY package.json package-lock.json
RUN npm install
COPY . /
ARG configuration=production
RUN npm run build --outputPath=.dist/accounting-system-of-university-classroom-fund-client
# Stage 2, use the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY /nginx-custom.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /dist/accounting-system-of-university-classroom-fund-client /usr/share/nginx/html