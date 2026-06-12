FROM node:22-alpine

WORKDIR /app

RUN corepack enable && corepack prepare yarn@4.16.0 --activate

COPY package.json yarn.lock .yarnrc.yml ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host", "0.0.0.0"]