# Development Guide

## Quick Start

1. **Clone and Setup**
   ```bash
   git clone <your-repo-url>
   cd reflect-journal-app
   ./setup.sh  # or npm install
   ```

2. **Environment Setup**
   - Copy `.env.local` template and add your credentials
   - Set up PostgreSQL database
   - Get Clerk authentication keys

3. **Database Setup**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

4. **Start Development**
   ```bash
   npm run dev
   ```

## Project Structure

- `/app` - Next.js 13+ App Router pages and layouts
- `/components` - Reusable React components
- `/actions` - Server actions for data operations
- `/lib` - Utility functions and configurations
- `/prisma` - Database schema and migrations

## Key Features

### Authentication
- Uses Clerk for secure user authentication
- Automatic user creation and management

### Database
- PostgreSQL with Prisma ORM
- User profiles, journal entries, collections
- Automatic timestamps and relationships

### UI Components
- Clean, minimal design with Tailwind CSS
- Radix UI components for accessibility
- Responsive design for all screen sizes

## Environment Variables

```env
# Required
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."

# Optional
ARCJET_KEY="..."  # For rate limiting
```

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
npx prisma studio    # Database GUI
npx prisma generate  # Regenerate Prisma client
```

## Contributing

1. Keep components simple and minimal
2. Use TypeScript for type safety
3. Follow the existing code style
4. Test thoroughly before submitting
5. Update documentation as needed

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically on push

### Other Platforms
- Works on any platform supporting Next.js
- Ensure database and environment variables are configured
- Build with `npm run build`

## Troubleshooting

### Common Issues

**Prisma Client Errors**
```bash
npx prisma generate
npx prisma db push
```

**Build Failures**
- Check environment variables
- Ensure database is accessible
- Verify all dependencies are installed

**Authentication Issues**
- Verify Clerk keys in environment
- Check Clerk dashboard configuration
- Ensure redirect URLs are correct

## Support

For issues or questions:
1. Check the main README.md
2. Review the troubleshooting section
3. Open an issue on GitHub
