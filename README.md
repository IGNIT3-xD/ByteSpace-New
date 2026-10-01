# ByteSpace 🚀

ByteSpace is a modern web platform designed to deliver online learning experiences, featuring user authentication, course discovery, creator profiles and etc.

---

## 🌐 Live Demo & Repository

- **Live Application**: http://byte-space-new-two.vercel.app
- **GitHub Repository**: https://github.com/IGNIT3-xD/ByteSpace-New

---

## 🛠️ Technologies Used

### Core Framework & Runtime

- **Next.js 16.3.8 (App Router)**: Server-Side Rendering (SSR), Client Side rendering, and React Server Components.
- **React 19**: Modern UI component architecture.
- **TypeScript**: Static typing across client and server logic.

### Authentication & Security

- **Better Auth**: Handles credential-based login/registration and social sign-in.
- **Google OAuth 2.0**: Social authentication.

### Database & ORM

- **PostgreSQL**: Cloud serverless database instance.
- **Prisma ORM**: Type-safe database queries and migrations.

### Styling & UI Components

- **Tailwind CSS**: Utility-first styling.
- **Lucide React**: Clean vector icon suite.
- **UI**: ShadCN UI.
- **Sonner**: Toast notifications for user feedback.

### Hosting & Deployment

- **Vercel**: Edge network hosting and continuous deployment.

---

## ✨ Key Features

1. **Authentication System**
   - Traditional Email & Password Sign Up and Sign In.
   - Google OAuth One-Click Social Sign-In.
   - Dynamic user profile state management across header and mobile drawers.

2. **Responsive Navigation & Layout**
   - Desktop and Mobile responsive navigation with auto-closing menus.
   - Context-aware UI changes based on authentication state.

3. **Course & Creator Discovery**
   - Course overview pages and creator profile showcases.
   - Dynamic search and filter functionality.

---

## 🛡️ Edge Cases Handled

- **Strict OAuth Domain Security (`trustedOrigins`)**:
  - Explicitly handles server-side request origin verification between production domains and local development environments to prevent origin spoofing.

- **Unauthenticated Route Access**:
  - Handles automatic redirection and toast errors on restricted routes.

- **Dynamic Navigation State Synchronization**:
  - Handles click-outside behavior to automatically dismiss open profile and navigation dropdown menus on desktop and mobile viewports.

---

## 📋 Special Instructions to Review Work

1. **Google OAuth Testing**:
   - To test **Google Sign-In**, use a standard Google Account. It will redirect to Google's sign-in screen and return to the application at `/api/auth/callback/google`.

2. **Email/Password Credentials**:
   - You can create a new test account on the `/register` page.
   - Alternatively, sign in using pre-created test credentials if supplied.

3. **Local Setup Instructions**:
   - Clone the repo:
     ```bash
     git clone https://github.com/IGNIT3-xD/ByteSpace-New
     cd byte-space-new
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up your `.env.local`:
     ```env
     DATABASE_URL="your-postgresql-url"
     BETTER_AUTH_SECRET="your-secret"
     BETTER_AUTH_URL="http://localhost:3000"
     GOOGLE_CLIENT_ID="your-google-client-id"
     GOOGLE_CLIENT_SECRET="your-google-client-secret"
     ```
   - Run local development server:
     ```bash
     npm run dev
     ```

---

## 📝 Additional Notes

- The database runs on Neon Serverless Postgres; database connections are optimized for edge and serverless environments.
- Client authentication state is managed reactively via `authClient.useSession()`.

---

## 📬 Contact Information & Developer Details

- **Developer / Maintainer**: Md Imran Ali
- **Email**: md.imranali2046@gmail.com
- **GitHub**: https://github.com/IGNIT3-xD
- **LinkedIn**: https://www.linkedin.com/in/imran-ali-mern