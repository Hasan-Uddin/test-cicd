# Stage 1: Build Angular app
FROM node:20.19-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build for production
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:alpine AS runtime

# Copy custom Nginx config (for Angular routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Angular files from build stage
COPY --from=build /app/dist/dapplesoft-eintern/browser /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
