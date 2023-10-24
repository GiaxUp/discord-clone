# Fullstack Discord Clone
###  (Next.js, React, Socket.io, Prisma, Tailwind, postgreSQL)
Features:
- Real-time messaging using Socket.io
- Send attachments as messages using UploadThing
- Delete and edit messages in real time for all users
- Create Text, Audio and Video call channels
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick, Role change Guest / Moderator)
- Unique invite link generation & full working invite system
- Server creation and customization
- UI created using TailwindCSS and ShadcnUI
- Full responsivity and mobile UI
- Light / Dark mode
- Websocket fallback polling with alerts
- ORM using Prisma
- postgreSQL database to store data
- Authentication with Clerk

## Screenshots
### Home Page
![image](https://github.com/GiaxUp/discord-clone/assets/40038797/7751efcb-5080-49e0-9b23-ef19314afa2f)
### New Server
![image](https://github.com/GiaxUp/discord-clone/assets/40038797/1ce995fa-842c-4d0e-bcf9-fe037a30d32e)
### Private Chat 1:1
![image](https://github.com/GiaxUp/discord-clone/assets/40038797/0a05e7ad-e864-4e78-86fe-ce4a78ee5264)
### Search + Server Management
![image](https://github.com/GiaxUp/discord-clone/assets/40038797/40aa055f-28be-483b-83b2-90531571d2fe)
### Video/Vocal Channel
![image](https://github.com/GiaxUp/discord-clone/assets/40038797/1684950f-207b-4a34-8e91-b1f89601dd35)

### Prerequisites

**Node version 18.x.x**

### Cloning my repository

```shell
git clone https://github.com/GiaxUp/discord-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Setup Prisma

Add postgreSQL Database (I have mine running on local)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```
