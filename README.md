## Testing Deployed App

- Visit [app](https://collaboration-board-gmolle.vercel.app/)
- Create an account, sign in with Google, or sign in with test admin account:
  - Email: admin@gmail.com
  - Password: admin123
- Create or join an organization (admin account is already in one to make it easier for you)
- Create a board and visit it (can visit the already created one in admin account)
- I recommend opening the app in a second browser or in an incognito window so you can have two users in the same board at the same time to view the real time updates

## Running App Locally

Install Dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Run The Convex DB

```bash
npx convex dev
```

You will also need to create free accounts on [Convex](https://www.convex.dev/), [Clerk](https://clerk.com/), and [Liveblocks](https://liveblocks.io/) and follow the documentation to create your api keys. Then create the following environment variables in your `.env` file

```bash
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
LIVEBLOCKS_SECRET_KEY=
```

Open [http://localhost:3000](http://localhost:3000)
