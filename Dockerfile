FROM node:10.10.0
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
COPY . /usr/src/app
RUN npm link
RUN npm run build
RUN npm link api-comparator
CMD ["node", "test.js"]