# Ravi Prajapati — Full Stack AI Developer

> **MERN + AI Engineer | RAG | Agentic AI | Backend Engineering**

Mumbai, Maharashtra, India  
📞 +91-9769479166  
✉️ kingraviprajapati@gmail.com  
🌐 [Portfolio](https://raviporto.onrender.com)  
🔗 [GitHub URL — add here]  
🔗 [LinkedIn URL — add here]

---

## Professional Summary

Full Stack AI Developer building intelligent full-stack applications and stateful agentic workflows.

Strong foundation in the MERN stack with experience across **React, Node.js, Express.js, MongoDB, Python, FastAPI, LangChain, LangGraph, RAG, vector search, REST APIs, real-time communication, Docker, AWS, and CI/CD**.

Focused on building production-oriented AI applications that combine full-stack engineering with **LLM-powered retrieval, agentic workflows, external tool integrations, and backend systems**.

---

# Technical Skills

## Languages

- JavaScript (ES6+)
- Python
- C++
- HTML5
- CSS3

## Frontend

- React.js
- Next.js
- React Router
- Tailwind CSS
- React Hooks

## Backend

- Node.js
- Express.js
- Nest.js
- FastAPI
- REST APIs
- WebSocket

## Databases

- MongoDB
- PostgreSQL
- Redis

## AI / Generative AI

- LangChain
- LangGraph
- Retrieval-Augmented Generation (RAG)
- Vector Search
- ChromaDB
- FAISS
- Pinecone
- LLM APIs
- Agentic AI workflows

## DevOps / Cloud

- Docker
- GitHub Actions
- Nginx
- AWS S3
- Vercel
- Render

## Testing

- Jest
- React Testing Library

---

# Professional Experience

## Full Stack Developer Intern — RAPS Powerplay

**Sep 2025 – Nov 2025**

### Responsibilities & Contributions

- Designed, developed, and maintained the RAPS Powerplay website.
- Designed and implemented RESTful APIs using **Node.js and Express.js**.
- Implemented secure user authentication using **JWT**.
- Built CRUD operations for blog posts.
- Developed responsive frontend interfaces using **React, React Router, and Tailwind CSS**.
- Used functional React components and Hooks for application state management.
- Implemented image/file upload functionality using **Multer**.
- Added search and filtering functionality.
- Implemented Markdown rendering.

### Technology Stack

`React.js` `Node.js` `Express.js` `MongoDB` `JWT` `Tailwind CSS` `Multer`

---

# Featured AI Projects

## 1. Production RAG System

**Role:** Full Stack AI / Backend Engineering  
**Status:** Production-oriented project

### Overview

A production-oriented Retrieval-Augmented Generation platform designed to provide conversational question answering over user-provided documents.

The system combines **FastAPI, LangGraph, Pinecone, LLM APIs, document ingestion, vector retrieval, metadata filtering, asynchronous backend processing, and a React frontend**.

### Core Problem

Traditional LLM applications can hallucinate or lack access to private user documents.

This system addresses that by retrieving relevant document context before generating an answer.

### High-Level Architecture

```text
                         ┌──────────────────────┐
                         │      React Client    │
                         │  Chat + Documents    │
                         └──────────┬───────────┘
                                    │
                                    │ HTTP / Streaming
                                    ▼
                         ┌──────────────────────┐
                         │      FastAPI         │
                         │   API / Middleware   │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    LangGraph Agent   │
                         │                      │
                         │ Decision → Retrieval │
                         │ → Generation         │
                         └───────┬───────┬──────┘
                                 │       │
                       ┌─────────┘       └──────────┐
                       ▼                            ▼
              ┌────────────────┐           ┌────────────────┐
              │ Pinecone       │           │ LLM Provider   │
              │ Vector Search  │           │ Generation     │
              └────────────────┘           └────────────────┘
                       ▲
                       │
              ┌────────────────┐
              │ Document       │
              │ Ingestion      │
              │ PDF / TXT/OCR  │
              └────────────────┘
```

### Retrieval Flow

```text
User Query
    │
    ▼
Query / Safety Decision
    │
    ▼
Retrieve relevant chunks
    │
    ├── user_id filter
    ├── conversation_id filter
    └── top-k retrieval
    │
    ▼
Context Formatting
    │
    ▼
LLM Generation
    │
    ▼
Streaming Response
```

### Document Ingestion Flow

```text
PDF / TXT
   │
   ▼
Document Extraction
   │
   ├── Text extraction
   └── OCR fallback
   │
   ▼
Chunking
   │
   ▼
Embedding Generation
   │
   ▼
Vector Storage
   │
   ▼
Pinecone
```

### Key Engineering Areas

- FastAPI backend
- Async-oriented backend architecture
- LangGraph workflow orchestration
- Pinecone vector database
- Vector similarity retrieval
- Metadata filtering
- User and conversation isolation
- PDF/TXT ingestion
- PyMuPDF document extraction
- OCR fallback for scanned pages
- Embedding generation
- Context formatting
- LLM generation
- Streaming responses
- Docker deployment
- Observability
- React + TypeScript frontend

### Multi-Tenant Retrieval Model

Documents are associated with metadata such as:

```text
user_id
conversation_id
document information
```

This allows retrieval to be constrained to the appropriate user's conversation/document scope.

Conceptually:

```text
Query
  │
  ▼
Embedding
  │
  ▼
Pinecone
  │
  ├── user_id = current_user
  ├── conversation_id = current_conversation
  └── top_k = 5
  │
  ▼
Relevant Documents
```

### Technology Stack

`React` `TypeScript` `Tailwind CSS`  
`FastAPI` `Python`  
`LangChain` `LangGraph`  
`Pinecone`  
`LLM APIs`  
`PyMuPDF`  
`OCR`  
`Docker`  
`PostgreSQL`  
`Redis`  
`LangSmith` `Logfire`

### URLs

- GitHub: **[Add GitHub repository URL]**
- Live Demo: **[Add live deployment URL]**
- Architecture Diagram: **[Add architecture URL if available]**
- API Documentation: **[Add Swagger/OpenAPI URL if deployed]**

---

# 2. AI Hiring & Resume Screening Agent

**Role:** AI / Agentic Workflow Engineer  
**Status:** Active project

### Overview

An agentic hiring workflow designed to automate parts of the recruitment lifecycle while retaining **Human-in-the-Loop (HITL)** control at important decision points.

The system combines structured job-description processing, human approval, job posting, email retrieval, resume processing, candidate evaluation, and shortlisting.

### High-Level Architecture

```text
                         ┌──────────────────────┐
                         │       HR / User      │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Job Description    │
                         │     Processing       │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │ Structured JD        │
                         │ Extraction           │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │ Human Approval /     │
                         │ Feedback             │
                         └──────────┬───────────┘
                                    │
                                    ▼
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼
          ┌──────────────────┐            ┌──────────────────┐
          │ Job Posting      │            │ External Tools   │
          │ LinkedIn / etc.  │            │ APIs             │
          └──────────────────┘            └──────────────────┘
                                                    │
                                                    ▼
                                           ┌──────────────────┐
                                           │ Gmail / Applicant│
                                           │ Emails           │
                                           └────────┬─────────┘
                                                    │
                                                    ▼
                                           ┌──────────────────┐
                                           │ Resume           │
                                           │ Processing       │
                                           └────────┬─────────┘
                                                    │
                                                    ▼
                                           ┌──────────────────┐
                                           │ JD ↔ Resume      │
                                           │ Evaluation       │
                                           └────────┬─────────┘
                                                    │
                                                    ▼
                                           ┌──────────────────┐
                                           │ Shortlisted      │
                                           │ Candidates       │
                                           └────────┬─────────┘
                                                    │
                                                    ▼
                                           ┌──────────────────┐
                                           │ HR Confirmation  │
                                           └──────────────────┘
```

### Workflow

```text
JD
 │
 ▼
Structured extraction
 │
 ▼
Human approval
 │
 ▼
Job posting
 │
 ▼
Wait / applicant collection
 │
 ▼
Gmail applicant retrieval
 │
 ▼
Resume attachment processing
 │
 ▼
Candidate evaluation
 │
 ▼
Shortlisting
 │
 ▼
Human confirmation
```

### Key Engineering Concepts

- LangGraph workflow orchestration
- Stateful agent workflows
- Human-in-the-Loop
- Structured job-description extraction
- External tool/API integrations
- LinkedIn integration
- Gmail integration
- Resume attachment processing
- Candidate screening
- Workflow state management
- Long-running workflow considerations
- Asynchronous API integration

### Technology Stack

`Python` `LangGraph` `LangChain`  
`LLM APIs`  
`Composio`  
`Gmail`  
`LinkedIn`  
`Human-in-the-Loop`

### URLs

- GitHub: **[Add GitHub repository URL]**
- Demo: **[Add demo URL]**
- Architecture Diagram: **[Add URL if available]**

---

# 3. Multi-Source RAG & Video Intelligence Platform

**Jan 2025 – Mar 2025**

### Overview

A RAG-based question-answering platform capable of processing both **PDF documents and YouTube URL audio transcriptions** and using the resulting information as context for question answering.

### Key Features

- PDF document ingestion
- YouTube URL audio transcription processing
- Semantic chunking
- Vector embeddings
- Context-aware question answering
- Metadata filtering
- Custom prompt templates
- Asynchronous ingestion

### Architecture

```text
                ┌───────────────────┐
                │      React UI     │
                └─────────┬─────────┘
                          │
                          ▼
                ┌───────────────────┐
                │     FastAPI       │
                └─────────┬─────────┘
                          │
              ┌───────────┴────────────┐
              │                        │
              ▼                        ▼
        ┌────────────┐          ┌───────────────┐
        │ PDF Input  │          │ YouTube URL   │
        └─────┬──────┘          └──────┬────────┘
              │                        │
              ▼                        ▼
        Text Extraction          Audio / Transcript
              │                        │
              └────────────┬───────────┘
                           ▼
                    Semantic Chunking
                           │
                           ▼
                    Embedding Generation
                           │
                           ▼
                       ChromaDB
                           │
                           ▼
                     Retrieval
                           │
                           ▼
                   Prompt Construction
                           │
                           ▼
                        LLM
                           │
                           ▼
                       Answer
```

### Engineering Contributions

- Engineered a hybrid RAG pipeline using FastAPI and LangChain.
- Implemented processing for PDF documents and YouTube URL audio transcriptions.
- Architected an asynchronous ingestion engine.
- Implemented document parsing and semantic chunking.
- Added vector embedding generation.
- Implemented metadata filtering.
- Created custom prompt templates to improve retrieval-grounded generation.
- Focused on reducing hallucinations on long-form content.

### Technology Stack

`React` `FastAPI` `Python` `LangChain` `ChromaDB`

### URLs

- GitHub: **[Add GitHub repository URL]**
- Live Demo: **[Add live demo URL]**

---

# 4. Full-Stack Music Streaming Platform — Spotify Clone

**May 2025 – Nov 2025**

### Overview

A full-stack music streaming platform built with the MERN stack, including media playback, user data, playlists, favourites, AWS S3 storage, Dockerized services, and CI/CD.

### Architecture

```text
                        ┌───────────────────┐
                        │    React Client   │
                        │  Music Player UI  │
                        └─────────┬─────────┘
                                  │
                         REST / API Requests
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ Node.js / Express │
                        │      Backend      │
                        └─────────┬─────────┘
                                  │
                   ┌──────────────┴──────────────┐
                   │                             │
                   ▼                             ▼
            ┌──────────────┐              ┌──────────────┐
            │   MongoDB    │              │    AWS S3    │
            │ User / Music │              │ Song Storage │
            │ / Playlists  │              │              │
            └──────────────┘              └──────────────┘
```

### Media Playback

Implemented a custom media player using the HTML5 Audio API supporting:

- Play
- Pause
- Seek
- Volume control

### Data Modeling

Designed MongoDB schemas for relationships involving:

- Users
- Songs
- Playlists
- Favourites

### Containerization

Used Docker and a microservice-oriented architecture to run application services on separate ports.

### AWS Integration

Used **AWS S3** for storing songs/media assets.

### CI/CD

Implemented CI/CD pipelines using **GitHub Actions** for testing and deployment workflows.

### Technology Stack

`React.js` `Node.js` `Express.js` `MongoDB`  
`Docker` `AWS S3` `GitHub Actions` `HTML5 Audio API`

### URLs

- GitHub: **[Add GitHub repository URL]**
- Live Demo: **[Add live demo URL]**
- Architecture: **[Add architecture diagram URL]**

---

# 5. Full-Stack Chat Application with Real-Time Messaging

**Mar 2025 – Apr 2025**

### Overview

A MERN-based real-time chat application supporting one-to-one communication using WebSocket-based persistent connections.

### Architecture

```text
              ┌──────────────────────┐
              │      React Client    │
              │   Chat Interface     │
              └──────────┬───────────┘
                         │
                         │ WebSocket
                         │
                         ▼
              ┌──────────────────────┐
              │ Node.js / Express    │
              │ WebSocket Server     │
              └──────────┬───────────┘
                         │
                         │ Persistence
                         ▼
              ┌──────────────────────┐
              │       MongoDB        │
              │ Users / Messages     │
              └──────────────────────┘
```

### Engineering Contributions

- Designed and deployed a MERN stack application for one-to-one communication.
- Implemented WebSocket communication for persistent bidirectional connections.
- Built responsive React UI.
- Used React Hooks for frontend state management.
- Integrated REST APIs for user and message persistence.
- Used MongoDB for persistent application data.

### Technology Stack

`React.js` `Node.js` `Express.js` `MongoDB` `WebSocket` `REST API`

### URLs

- GitHub: **[Add GitHub repository URL]**
- Live Demo: **[Add live demo URL]**

---

# Education

## B.Sc. Computer Science — Ongoing

**B.K. Birla College of Arts, Commerce and Science**

Expected Graduation: **2028**

---

# AI Engineering Focus

My current engineering focus is on building production-oriented AI applications across the following areas:

```text
                 Full Stack AI Engineering
                          │
        ┌─────────────────┼──────────────────┐
        │                 │                  │
        ▼                 ▼                  ▼
       RAG             AI Agents        Full Stack
        │                 │                  │
   Vector Search      LangGraph          React
   Embeddings         HITL               Node.js
   Pinecone           Tools              FastAPI
   Retrieval          Workflows          MongoDB
        │                 │                  │
        └─────────────────┼──────────────────┘
                          ▼
                 Production AI Apps
```

---

# Engineering Strengths

## Full-Stack Engineering

- React-based frontend development
- Node.js / Express backend development
- REST API design
- MongoDB data modeling
- Real-time WebSocket applications
- Authentication and authorization
- File upload and processing
- Responsive UI development

## AI Engineering

- Retrieval-Augmented Generation
- Vector databases
- Semantic retrieval
- Metadata filtering
- LLM-powered applications
- LangChain
- LangGraph
- Agentic workflows
- Human-in-the-loop systems
- External tool integrations

## Backend / Infrastructure

- FastAPI
- Async backend processing
- Docker
- AWS S3
- GitHub Actions
- Nginx
- PostgreSQL
- Redis
- Application observability

---

# Portfolio Links

| Resource | URL |
|---|---|
| Portfolio | https://raviporto.onrender.com |
| GitHub | **[Add GitHub URL]** |
| LinkedIn | **[Add LinkedIn URL]** |
| Production RAG Demo | **[Add URL]** |
| Production RAG Repository | **[Add URL]** |
| AI Hiring Agent Repository | **[Add URL]** |
| AI Hiring Agent Demo | **[Add URL]** |
| Music Streaming Demo | **[Add URL]** |
| Chat Application Demo | **[Add URL]** |

---

# Target Role

**Full Stack AI Developer / AI Engineer Intern / AI Agent Engineer Intern / GenAI Engineer Intern / AI Application Engineer Intern**

### Preferred Environment

- Paid internship
- Onsite or hybrid
- Mumbai / Mumbai Metropolitan Region
- Product-focused engineering teams
- AI startups and software companies
- Opportunities involving LLMs, RAG, agents, backend systems, and full-stack product development

---

# Resume Positioning

> **Full Stack AI Developer who combines MERN and Python backend engineering with RAG, vector search, LangChain, LangGraph, and agentic workflows to build production-oriented AI applications.**

---

## Notes for Resume Tailoring

This README is the **master profile**. Individual internship applications should not necessarily contain every project or technology listed here.

For a Full Stack AI internship, prioritize:

1. Production RAG System
2. AI Hiring & Resume Screening Agent
3. Full Stack Developer Internship
4. Music Streaming Platform

Use the older RAG/video project and real-time chat project when they are relevant to the specific job description.

**Do not invent metrics, URLs, users, performance improvements, or business outcomes. Add them only when they can be verified.**
