#!/bin/bash

# LBSIT Institute - Development Setup Script
# This script helps set up the development environment

echo "🚀 Setting up LBSIT Institute development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (version 16 or higher) first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please check the error messages above."
    exit 1
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Creating template..."
    cat > .env << EOL
# EmailJS Configuration
# Get these values from https://www.emailjs.com/
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
EOL
    echo "📝 Created .env template. Please update it with your EmailJS credentials."
else
    echo "✅ .env file exists"
fi

# Build the project to check for errors
echo "🔨 Building project to check for errors..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Setup complete! You can now:"
    echo "   • Run 'npm start' to start the development server"
    echo "   • Run 'npm run build' to build for production"
    echo "   • Run 'npm run deploy' to deploy to GitHub Pages"
    echo ""
    echo "📖 For deployment instructions, see DEPLOYMENT_GUIDE.md"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi