# Docker Compose User Project

A simple Node.js + Express + PostgreSQL application demonstrating Docker Compose setup with Prisma ORM.

## Overview

This project is a containerized user management application built with:
- **Node.js** with TypeScript
- **Express.js** for the REST API
- **PostgreSQL** as the database
- **Prisma** as the ORM
- **Docker Compose** for orchestration

## Features

- User data model with UUID-based IDs
- PostgreSQL database with automated migrations
- Dockerized development environment
- Type-safe database access with Prisma
- Hot-reload development setup

## Project Structure

```
docker_compose/
├── docker-compose.yml    # Docker orchestration configuration
├── Dockerfile            # Application container definition
├── package.json          # Node.js dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Database migration history
└── src/
    ├── index.ts          # Application entry point
    └── generated/        # Prisma generated client
```

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Web Framework**: Express.js v5
- **Database**: PostgreSQL
- **ORM**: Prisma v7.3.0
- **Containerization**: Docker & Docker Compose

## Getting Started

For detailed installation and setup instructions, please refer to [Contribute.md](Contribute.md).

## License

ISC
