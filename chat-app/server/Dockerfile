FROM node:20-alpine
ENV NODE_ENV=production
COPY . /app
WORKDIR /app
RUN npm ci --omit=dev

EXPOSE 3000

CMD ["node", "index.js"]