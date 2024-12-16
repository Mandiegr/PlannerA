# Agenda - Next.js, TypeScript, Firebase, and FullCalendar

![License](https://img.shields.io/badge/license-MIT-green) ![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen) ![Next.js](https://img.shields.io/badge/next.js-%3E%3D14.1.0-blue)

## Overview

Agenda is a modern scheduling and calendar application built with:
- **Next.js** for server-side rendering and frontend.
- **TypeScript** for type-safe development.
- **Firebase** for authentication and backend services.
- **FullCalendar** for event management and display.

This project provides a customizable calendar interface with user authentication and backend integration.

---

## Features

- Authentication using Firebase (Google).
- Event management with FullCalendar.
- Responsive design using Styled-Components.
- State management with React Query.
- Data validation with Yup and Zod.
- Integration with external APIs.

---

## Prerequisites

Make sure you have the following installed:
- Node.js >= 16.0.0
- npm 

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mandiegr/PlannerA.git
   cd agenda
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production version.
- `npm start`: Runs the production server.
- `npm run lint`: Runs linting checks.

---

## Technologies Used

- **Next.js** - Framework for server-rendered React applications.
- **TypeScript** - For type-safe code.
- **Firebase** - Backend services and authentication.
- **FullCalendar** - Calendar library for event display.
- **Styled-Components** - Styled CSS-in-JS.
- **React Query** - Data fetching and state management.
- **Yup/Zod** - Schema validation.

---

## Usage

1. Authenticate using the Firebase login form.
2. Add, edit, or delete events in the calendar.
3. View the calendar in day, week, or month mode.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your branch and open a pull request.

---

## Design figma:

- Design  Figma: [Page login](https://www.figma.com/design/Eldea7kXR9ep51CAd65L98/PlannerA-Login-Page?node-id=0-1&t=maSiednhV6YzJzDX-1)
---

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [FullCalendar Documentation](https://fullcalendar.io/docs)

