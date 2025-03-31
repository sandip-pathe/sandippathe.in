FROM node:20-alpine
WORKDIR /app

# Install dependencies and build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve static files
CMD ["npx", "serve@latest", "out", "-l", "8080"]
