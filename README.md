### Disclaimer

Theming and colors were done with the help of LLMs

# Arithmetic Progression Calculator

A full-stack web application that calculates the sum of arithmetic progressions. Built with React and FastAPI, using Docker [compose] for containerization.

## Prerequisites

Make sure you have the following installed:
- Docker
- Docker Compose

Make sure that both ports 3000 and 8888 are free to use, or go ahead and change them across the entire codebase

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ahmednofal/supremainc_arithmetic_progression_summation
cd <project-directory>
```

2. Start the application:
```bash
docker compose up --build
```

3. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8888

## Tech Stack

### Frontend
- React 18

### Backend
- FastAPI

### Development Environment
- Docker & Docker Compose
- Hot-reloading enabled for both services
- Volume mounts for real-time development
- Network configuration for service communication

## API Endpoints

- `POST http://localhost:8888/sum?upto={number}`: Calculates the sum of arithmetic progression up to the given number

- For testing without frontend:

    Good:
    `curl -X POST "http://localhost:8888/sum?upto=20" -H "Content-Type: application/json"`

    Bad:

    `curl -X POST "http://localhost:8888/sum?upto=-20" -H "Content-Type: application/json"`

    `curl -X POST "http://localhost:8888/sum?upto=mhamed" -H "Content-Type: application/json"`