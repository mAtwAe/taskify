FROM node:latest
WORKDIR /taskify
COPY package.json /taskify
CMD npm install
COPY . /taskify
CMD npm run dev
EXPOSE 3000