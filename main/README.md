# One Word

This is a side project game and by now, is a Work In Progress

## Layout

[Link](https://www.figma.com/file/lTIxelelnjm83MiROxrlTe/One-Word?type=design&node-id=0%3A1&mode=design&t=8IL9mMSoloe1bCnK-1)

---

## Stack

- Next JS (13) as a framework - created via `create-next-app`
- Prisma as ORM
- Typescript
- Tailwind CSS for Styles
- Shadcn UI for Design System
- Planet Scale (MySQL) integrated with Prisma for Database
- Deployed using Vercel's built in CI/CD integration
- Clerk JS for Authentication (possibly moving to NextAuth in the future)
- Uploadthing to handle file uploading
- Socket.io to handle instant communication

## Environments

So far, it works on Vercel's Preview Environments and an unique Production environment

**Production**
[https://one-word-orpin.vercel.app/](https://one-word-orpin.vercel.app/)

## Development

// TODO

### How to handle database changes

// TODO

- Get into details, of the procedures for using PlanetScales branches.
- Get into details, of the procedures for using Prisma commands (generate and push).
