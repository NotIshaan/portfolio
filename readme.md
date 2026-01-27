# Full-Stack Portfolio Website

A modern full-stack developer portfolio built with React (Vite) on the frontend and FastAPI on the backend.  
This project is intentionally developed in structured stages to reflect real-world engineering and DevOps practices.

---

## Architecture Overview

This repository follows a monorepo structure:

    portfolio/
    ├── frontend/   → React + Vite + Tailwind CSS
    ├── backend/    → FastAPI REST API
    └── README.md

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- JavaScript

### Backend
- FastAPI
- Python
- RESTful APIs

### DevOps (Planned / In Progress)
- Docker
- Docker Compose
- CI/CD pipelines
- Cloud deployment

---

## Project Stages

### Stage 1: Local Full-Stack Setup (Completed)
- Frontend and backend running locally
- REST API integration working
- Experience and skills rendered dynamically
- Clean Git history and GitHub repository

### Stage 2: Containerization (Planned)
- Dockerize frontend and backend
- Docker Compose for local orchestration
- Environment-based configuration

### Stage 3: CI/CD & Cloud Deployment (Planned)
- Automated builds on every commit
- Container image creation
- Cloud deployment using industry best practices

---

## Running the Project Locally

### Frontend

    cd frontend
    npm install
    npm run dev

### Backend

    cd backend
    uvicorn main:app --reload

The frontend consumes data from the backend using REST APIs.

---

## Deployment

- Frontend will be deployed using Vercel
- Backend deployment will be handled in later stages
- CI/CD will be introduced progressively

---

## Why This Project Exists

This project is not just a portfolio website.

It is designed to:
- Follow real-world engineering workflows
- Avoid premature optimization
- Demonstrate practical DevOps and Cloud knowledge
- Evolve incrementally like production systems

---

## Author

Ishaan  
B.Tech in Computer Science  
Focused on CloudOps, DevOps, and ML-adjacent roles

---

This repository is actively evolving as part of a structured learning and deployment roadmap.

