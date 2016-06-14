FROM node

COPY . /src
WORKDIR /src

RUN npm rebuild 
RUN npm run deploy

ENV PORT 3000
EXPOSE 3000
CMD ["node", "/src/index.js"]
