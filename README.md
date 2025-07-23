# Reflect - A Mindful Journaling App

![Reflect Journal App](https://img.shields.io/badge/Next.js-15.3.3-blue)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/Database-Prisma-green)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-blue)

Reflect is a clean, minimal journaling application built with Next.js that helps users practice mindful writing and track their emotional well-being. The app features a simple interface focused on the writing experience without distractions.

## ✨ Features

### 📝 **Core Journaling**
- **Rich Text Editor**: Write with a clean, distraction-free editor that supports basic formatting
- **Daily Prompts**: Get inspired with thought-provoking daily writing prompts
- **Mood Tracking**: Track your emotional state with each entry
- **Draft Saving**: Automatically save drafts as you write

### 📚 **Organization**
- **Collections**: Organize your entries into custom collections/categories
- **Search & Filter**: Find your entries quickly with search and mood filters
- **Entry Management**: Edit, delete, and organize your journal entries

### 📊 **Analytics & Insights**
- **Mood Timeline**: Visualize your emotional journey over time
- **Writing Statistics**: Track your writing frequency and patterns
- **Mood Analytics**: See your average mood scores and trends

### 🔐 **Security & Privacy**
- **Secure Authentication**: Powered by Clerk for reliable user management
- **Data Privacy**: Your journal entries are private and secure
- **Rate Limiting**: Built-in protection against abuse

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.3.3, React 19, TailwindCSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (or your preferred SQL database)
- **Authentication**: Clerk
- **UI Components**: Radix UI primitives with custom styling
- **Charts**: Recharts for mood analytics
- **Security**: Arcjet for rate limiting and security
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (or another SQL database)
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/reflect-journal-app.git
   cd reflect-journal-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/reflect_journal"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   
   # Arcjet Security (optional)
   ARCJET_KEY=your_arcjet_key
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Visit [http://localhost:3000](http://localhost:3000) to see the app running.

## 📁 Project Structure

```
reflect-journal-app/
├── app/                          # Next.js 13+ app directory
│   ├── (auth)/                   # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/                   # Main app pages
│   │   ├── dashboard/            # User dashboard
│   │   ├── collection/           # Collection management
│   │   └── journal/              # Journal entry pages
│   ├── lib/                      # App-specific utilities
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Landing page
├── actions/                      # Server actions
│   ├── analytics.js              # Analytics data fetching
│   ├── collection.js             # Collection CRUD operations
│   ├── journal.js                # Journal entry operations
│   └── public.js                 # Public data operations
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── header.jsx                # Navigation header
│   ├── testimonial-carousel.jsx  # Testimonials section
│   └── user-menu.jsx             # User menu dropdown
├── lib/                          # Shared utilities
│   ├── arcjet.js                 # Security configuration
│   ├── checkUser.js              # User verification
│   ├── prisma.js                 # Database client
│   └── utils.js                  # General utilities
├── prisma/                       # Database schema and migrations
│   ├── schema.prisma             # Database schema
│   └── migrations/               # Database migrations
├── data/                         # Static data files
│   ├── faqs.json                 # FAQ content
│   └── testimonials.json         # Testimonial content
├── hooks/                        # Custom React hooks
│   └── use-fetch.js              # Data fetching hook
└── public/                       # Static assets
```

## 🎨 Key Components

### Journal Writing Interface
The heart of the app is a clean, distraction-free writing interface that allows users to:
- Write with a rich text editor
- Select their current mood
- Organize entries into collections
- Save drafts automatically

### Dashboard Analytics
Users can visualize their journaling journey with:
- Mood timeline charts showing emotional patterns
- Writing frequency statistics
- Average mood scores and trends

### Collection Management
Organize journal entries with:
- Custom collections/categories
- Collection-specific views
- Easy entry organization and filtering

## 🔧 Customization

### Styling
The app uses TailwindCSS for styling. Key design tokens:
- **Colors**: Clean blue (#3b82f6) primary with gray neutrals
- **Typography**: System fonts with good readability
- **Spacing**: Consistent spacing scale using Tailwind utilities

### Database Schema
The app uses Prisma with the following main models:
- **User**: User profiles and settings
- **Entry**: Journal entries with content, mood, and metadata
- **Collection**: Organization categories for entries

### Adding Features
To add new features:
1. Add new actions in the `actions/` directory
2. Create components in `components/`
3. Add new pages in the appropriate `app/` subdirectory
4. Update the database schema in `prisma/schema.prisma` if needed

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- Self-hosted with Docker

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Authentication by [Clerk](https://clerk.com/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Charts powered by [Recharts](https://recharts.org/)
- Security by [Arcjet](https://arcjet.com/)
- Styled with [TailwindCSS](https://tailwindcss.com/)

## 📧 Support

If you have any questions or need help getting started, please open an issue on GitHub or contact the maintainers.

---

**Start your mindful writing journey today with Reflect!** ✨
