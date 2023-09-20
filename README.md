# Fullstack Discord Clone
###  (Next.js, React, Socket.io, Prisma, Tailwind, MySQL)
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
- Websocket fallback: Polling with alerts
- ORM using Prisma
- MySQL database to store data
- Authentication with Clerk

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

Add MySQL Database (I have mine running on local)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```
