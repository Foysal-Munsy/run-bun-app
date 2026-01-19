<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  An app using <strong>Bun runtime</strong> with <strong>NestJS</strong>, demonstrating how to run NestJS without Node.js and generate modern API documentation using <strong>Scalar</strong>.
</p>

---

## Overview

This is a NestJS API running on the Bun runtime. It includes:
- API docs via OpenAPI (Swagger) + Scalar
- MongoDB integration via Mongoose
- A minimal `users` module (create user + fetch by id)

## What I implemented (step by step)

1. Bootstrapped a NestJS project and kept the app modular.
2. Used Bun for dependency management and running scripts.
3. Added API documentation:
   - OpenAPI document generation via `@nestjs/swagger`
   - Scalar UI mounted at `/reference` in [src/main.ts](src/main.ts)
4. Wired MongoDB using Mongoose:
   - Connection in [src/app.module.ts](src/app.module.ts) via `MONGO_URI` (with a localhost default)
5. Implemented the `users` feature:
   - Schema: [src/users/schemas/user.schema.ts](src/users/schemas/user.schema.ts)
   - DTO validation: [src/users/dto/create-user.dto.ts](src/users/dto/create-user.dto.ts)
   - Service methods (`create`, `findOne` with 404): [src/users/users.service.ts](src/users/users.service.ts)
   - Controller routes + Swagger tags: [src/users/users.controller.ts](src/users/users.controller.ts)


## Prerequisites

- Bun installed
- MongoDB running locally, or set `MONGO_URI` to a remote instance

## Run

- Install: `bun install`
- Start (prod-ish): `bun run start`
- Start (watch): `bun run start:dev`

Environment variables:
- `MONGO_URI` (default: `mongodb://localhost:27017/run_bun`)
- `PORT` (default: `3005`)

## Key routes

- Docs (Scalar): `GET /reference`
- Users:
  - `POST /users` with body `{ "name": string, "age": number }`
  - `GET /users/:id`
