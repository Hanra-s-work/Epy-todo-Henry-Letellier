FROM mariadb:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Deploy databases from .sql files
COPY ./default_sql/ /docker-entrypoint-initdb.d/

# Listing the content of the app and docker-entrypoint-initdb.d folders
RUN echo "Content of /app:" && ls -a /app && \
    echo "Content of /docker-entrypoint-initdb.d/:" && ls -a /docker-entrypoint-initdb.d/

# Make port 3300-3309 available to the world outside this container
EXPOSE 3300-3309

# Automatically prompt login command-line
# CMD ["mysql"]
