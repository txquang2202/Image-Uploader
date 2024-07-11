# Image Uploader
Author: Tran Xuan Quang
## Frontend

### Overview
This repository contains the frontend application for [Project Name]. It is built with Next.js and TypeScript.

### Getting Started
1. **Installation**
   ```bash
   npm install
1.  **Development**
    ```bash
    npm run dev
2.  **Build**
    ```bash
    npm run build
3.  **Start**
    ```bash
    npm start
4.  **Linting**
    ```bash
    npm run lint
### Dependencies

-   **Next.js** - 14.2.5
-   **React** - ^18
-   **React DOM** - ^18
-   **Ant Design (antd)** - ^5.19.1
-   **Axios** - ^1.7.2
-   **TypeScript** - ^5

### Dev Dependencies

-   **ESLint** - ^8
-   **@types/node** - ^20
-   **@types/react** - ^18
-   **@types/react-dom** - ^18
-   **eslint-config-next** - 14.2.5
-   **TypeScript** - ^5

* * * * *

Backend
-------

### Overview

This repository contains the backend application for [Project Name]. It is built with Node.js, Express, Prisma, and PostgreSQL.

### Getting Started

1.  **Installation**

    ```bash
    npm install

2.  **Environment Setup** Create a `.env` file and add your environment variables:
    makefile
    Sao chép mã

    `DB_URL=your_database_url
    PORT=your_port_number`

3.  **Database Migration**
    ```bash
    npx prisma migrate dev --name init
4.  **Development**
    ```bash
    npm run dev
5.  **Start**
    ```bash
    npm start
### Dependencies

-   **Express** - ^4.17.1
-   **Prisma** - ^5.16.2
-   **@prisma/client** - ^5.16.2
-   **pg** - ^8.7.1
-   **dotenv** - ^10.0.0
-   **cors** - ^2.8.5
-   **body-parser** - ^1.19.0
-   **multer** - ^1.4.5-lts.1

### Dev Dependencies

-   **Nodemon** - ^2.0.15

* * * * *

### Note

Ensure both frontend and backend are running concurrently for the full application functionality.
