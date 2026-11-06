# 2026-interview-stub

A Node.js + TypeScript project using Express. Requires Node 26 or later.

## Getting started

```sh
npm install
npm start          # starts the server on http://localhost:3000
npm run typecheck  # type-checks the project with tsc
```

Or run the app with MongoDB in Docker:

```sh
docker compose -f ops/docker-compose.yml up  # app on http://localhost:3000, MongoDB on localhost:27017
```

## Structure

```
.
├── src/
│   ├── index.ts           # Express server entry point
│   └── notify.ts          # Notification service (do not modify)
├── ops/
│   └── docker-compose.yml # App + MongoDB
├── docs/
│   ├── cr profile.MD      # Care recipient profiles
│   ├── cp profile.MD      # Care professional profiles
│   └── assigned.MD        # Visits assigned so far
├── package.json
└── tsconfig.json
```
