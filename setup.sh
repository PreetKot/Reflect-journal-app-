#!/bin/bash

echo "🚀 Setting up Reflect Journal App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v)
echo "✅ Node.js version: $NODE_VERSION"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  Creating .env.local file..."
    cat > .env.local << 'EOF'
# Database - Replace with your database URL
DATABASE_URL="postgresql://username:password@localhost:5432/reflect_journal"

# Clerk Authentication - Replace with your Clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Arcjet Security (optional)
ARCJET_KEY=your_arcjet_key_here
EOF
    echo "📝 Created .env.local file. Please update it with your actual credentials."
else
    echo "✅ .env.local file already exists"
fi

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update your .env.local file with actual credentials"
echo "2. Set up your database and run: npx prisma migrate dev"
echo "3. Start development server: npm run dev"
echo ""
echo "Happy journaling! ✨"
