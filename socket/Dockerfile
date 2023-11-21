# Use an official Node.js runtime as a base image
FROM node:lts-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents to the container at /app
COPY . .

# Command to run your application
CMD ["npm", "start"]

# Expose the port that the application will run on
EXPOSE 5005