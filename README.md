# auth-app

A learning project exploring authentication in Next.js. Built to understand 
auth patterns before migrating HOPS CRM from Power Apps to a full-stack React app.

🔗 [Live Demo](https://auth-app-seven-beryl.vercel.app)

## Features

- Email and password login via NextAuth v5
- Role-based access control (Admin, Manager, Viewer)
- Middleware route protection
- Hashed passwords with bcrypt
- Dark/light mode toggle

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Auth** — NextAuth v5
- **Database** — PostgreSQL (Supabase) via Prisma 7
- **UI** — shadcn/ui + Tailwind CSS v4

## Test Credentials

| Email | Role |
|---|---|
| harry@mail.co.uk | Admin | password123 |
| tom@mail.co.uk | Manager | password456 |
| dick@mail.co.uk | Viewer | password789 |
