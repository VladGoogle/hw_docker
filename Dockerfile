FROM node:14.17.3

WORKDIR /node/project
COPY ["package.json", "package-lock.json", "/"]
COPY . .

RUN npm i
RUN ls -a

CMD ["npm", "start"]