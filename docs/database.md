# Database Guide

This guide provides step-by-step instructions for setting up, starting, and visually managing the PostgreSQL database used in the One Word project.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Starting the Local Database](#starting-the-local-database)
3. [Accessing the Database with a GUI](#accessing-the-database-with-a-gui)
4. [Common Database Operations](#common-database-operations)
5. [Troubleshooting](#troubleshooting)

## Prerequisites

Before starting, make sure you have the following installed:

- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Yarn](https://yarnpkg.com/getting-started/install)

## Starting the Local Database

`One Word` is integrated with `API One Word` project. To make `One Word` work on your machine, you also you'll need to have `API One Word` running.

[API One Word](https://github.com/mariobrusarosco/api-one-word)



If your schema changes aren't showing up:

1. Make sure you've saved your changes to the `schema.prisma` file

2. Regenerate the Prisma client:

   ```bash
   yarn generate-schema
   ```

3. Apply the database changes:

   ```bash
   yarn db:push
   ```

   or create a new migration:

   ```bash
   yarn db:migrate
   ``` 