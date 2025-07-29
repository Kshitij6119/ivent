# Use an official Node.js runtime as the base image
# We choose a specific version (e.g., 20-alpine) for stability and smaller image size.
FROM node:20-alpine

# Set the working directory inside the container
# All subsequent commands will be run from this directory.
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
# This allows us to install dependencies before copying the rest of the application code,
# which helps Docker leverage caching for faster builds if dependencies haven't changed.
COPY package*.json ./

# Install application dependencies
# The `npm ci` command is used here. It's similar to `npm install` but is designed
# for automated environments like Docker builds. It installs exact versions from
# package-lock.json, ensuring reproducible builds.
RUN npm ci --only=production

# Copy the rest of the application code to the working directory
# The '.' after COPY refers to the current directory on the host machine (where Dockerfile is located)
# and the '.' after /app refers to the working directory inside the container.
COPY . .

# Expose the port your application listens on
# Based on your `app.js`, your application listens on port 8080.
EXPOSE 8080

# Define the command to run your application
# This command will be executed when the Docker container starts.
# We use `npm start` as defined in your package.json.
CMD ["npm", "start"]
