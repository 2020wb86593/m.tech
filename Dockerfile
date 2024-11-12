# Dockerfile for Django Application

# Use the official Python image from the Docker Hub
FROM python:3.8-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the Django project
COPY . /app/

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose the port the app runs on
EXPOSE 8000

# Run the Django development server
CMD ["gunicorn", "--workers", "3", "--bind", "0.0.0.0:8000", "empowerher.wsgi:application"]
