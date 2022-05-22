FROM node:16.13.1 as builder

WORKDIR /WWW/WWWROOT/

ADD package.json /WWW/WWWROOT/
RUN npm i

ADD . /WWW/WWWROOT/

RUN npm run build

FROM nginx

# 暴露80端口
EXPOSE 80

COPY --from=builder WWW/WWWROOT/dist/ /usr/share/nginx/html/