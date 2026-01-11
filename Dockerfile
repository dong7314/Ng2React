FROM node:22.10-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

# 개발 서버 실행
CMD ["npm", "run", "start"]