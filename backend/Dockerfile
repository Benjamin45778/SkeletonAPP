# backend/Dockerfile
FROM node:20-slim
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi
COPY server.js ./
EXPOSE 3000
CMD ["node", "server.js"]
