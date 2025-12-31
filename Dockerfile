# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia package.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia resto do código
COPY . .

# Build de produção
RUN npm run build

# Stage 2: Serve com nginx
FROM nginx:alpine

# Remove config padrão
RUN rm -rf /usr/share/nginx/html/*

# Copia config customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build do React
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe porta 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
