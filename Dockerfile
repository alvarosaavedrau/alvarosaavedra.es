
FROM node:20-slim

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm i

CMD ["npm", "run", "dev", "--", "-p", "4000"]