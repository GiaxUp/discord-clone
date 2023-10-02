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
![HomePage](https://i.ibb.co/88X84RV/main.png)
### New Server
![New Server](https://i.ibb.co/MDwcjb7/new.png)
### Private Chat 1:1
![Private Chat 1:1](https://i.ibb.co/YW4Jqfj/private.png)
### Search + Server Management
![Search + Server Management](https://i.ibb.co/6rYtmdq/search.png)
### Video/Vocal Channel
![Vocal Channel](https://i.ibb.co/NmnHWCH/vocal.png)

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
