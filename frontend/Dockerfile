# Use nginx image
FROM nginx:alpine

# Remove default nginx web files
RUN rm -rf /usr/share/nginx/html/*

# Copy your frontend files to nginx
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80
