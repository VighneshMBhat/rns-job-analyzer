# Talento Vision

## Overview
**Talento Vision** is a sophisticated, microservice-based platform designing to bridge the gap between job seekers' skills and current market demands. By leveraging advanced AI (Gemini 2.5 Pro, Groq) and real-time data analysis, it provides users with actionable insights, personalized skill gap reports, and market trend visualization.

**Note:** This is the parent repository functioning as a central index for the entire microservice architecture. Each service operates as an independent repository with its own deployment lifecycle.

## Microservices Architecture

The system is composed of several specialized microservices, each handling a distinct domain of the application:

### 1. Frontend Service (`frontend-service`)
*   **Tech Stack:** Next.js, React, Tailwind CSS
*   **Role:** User Interface for dashboard, authentication, profile management, and visualization. Connects to backend services via REST APIs.

### 2. Authentication Service (`Authentication-Service`)
*   **Tech Stack:** Python, FastAPI, Supabase Auth
*   **Role:** Manages user identity, session handling, profile data, and secure access tokens.

### 3. GitHub Service (`github_service`)
*   **Tech Stack:** Python, FastAPI, AWS Lambda
*   **Role:** Connects to user's GitHub account, fetches repositories, and uses AI (Groq) to intelligently extract and weight skills based on project code and usage frequency. Supports resume parsing and history tracking.

### 4. Skill Gap Service (`skillgap_service`)
*   **Tech Stack:** Python, FastAPI, Gemini 2.5 Pro, AWS Lambda
*   **Role:** The core analytical engine. Compares user's extracted skills against market trends to identify gaps. Generates detailed PDF reports and personalized learning recommendations.
*   **Features:** Smart Cron (runs analysis only on data change), AI-powered weighting.

### 5. Trend Skill Service (`trend_skill_service`)
*   **Tech Stack:** Python, FastAPI
*   **Role:** Aggregates and analyzes real-time job market data from various sources (Job boards, Reddit communities) to determine high-demand skills and emerging technologies.

### 6. Admin Service (`admin-service`)
*   **Tech Stack:** Python, FastAPI
*   **Role:** Back-office management dashboard for system monitoring, user management, and system-wide configuration.

### 7. Reports Service (External)
*   **Tech Stack:** Python
*   **Role:** Specialized service for generating high-fidelity exportable reports and serving download requests. (Integrated via Supabase Storage).

## Technology Stack

*   **Cloud Infrastructure:** AWS Lambda (Serverless), Supabase (Database & Storage)
*   **AI Models:** Google Gemini 2.5 Pro, Groq (Llama-3)
*   **Code Quality:** Microservice architecture with independent Cron jobs and event-driven updates.
*   **Deployment:** AWS SAM CLI, Vercel (Frontend).

## Deployment & Setup

Each microservice contains its own `README` and `template.yaml` (for AWS services) detailing specific setup and deployment instructions. Please refer to the individual directories for detailed guides.

## Repository Structure

*   `/frontend-service` - UI Application
*   `/Authentication-Service` - Auth API
*   `/github_service` - GitHub & Resume API
*   `/skillgap_service` - Analysis API
*   `/trend_skill_service` - Market Data API
*   `/admin-service` - Admin API
