# Use an official Node.js image as the base
FROM node:18-alpine 

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build 

# Use Nginx to serve the built React app
FROM nginx:stable-alpine

# Copy build files to Nginx directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
