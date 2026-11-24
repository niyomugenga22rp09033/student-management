
# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy all HTML files into the Nginx web directory
COPY index.html /usr/share/nginx/html/index.html
COPY hello.html /usr/share/nginx/html/hello.html
COPY contact.html /usr/share/nginx/html/contact.html

# Document the web server port
EXPOSE 80
