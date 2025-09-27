#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 LBSIT Institute - Deployment Script');
console.log('==========================================\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
    console.error('❌ Error: package.json not found. Please run this script from the project root.');
    process.exit(1);
}

// Check if build directory exists
const buildDir = path.join(process.cwd(), 'build');

try {
    console.log('📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    
    console.log('\n🔨 Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    if (!fs.existsSync(buildDir)) {
        throw new Error('Build directory not created');
    }
    
    console.log('\n✅ Build completed successfully!');
    console.log(`📁 Build files are in: ${buildDir}`);
    
    // Check if gh-pages is installed
    try {
        execSync('npx gh-pages --version', { stdio: 'pipe' });
        
        console.log('\n🚀 Deploying to GitHub Pages...');
        execSync('npm run deploy', { stdio: 'inherit' });
        
        console.log('\n🎉 Deployment completed successfully!');
        console.log('🌐 Your website will be available at:');
        console.log('   https://Nileshunique.github.io/lbsit_institute/');
        console.log('\n⏰ Note: It may take a few minutes for changes to appear.');
        
    } catch (error) {
        console.log('\n⚠️  gh-pages not available. Manual deployment required.');
        console.log('📋 To deploy manually:');
        console.log('   1. Push your code to GitHub');
        console.log('   2. Enable GitHub Pages in repository settings');
        console.log('   3. The GitHub Action will automatically deploy');
    }
    
} catch (error) {
    console.error('\n❌ Deployment failed:', error.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('   • Check that all dependencies are installed');
    console.log('   • Verify your .env file has correct EmailJS credentials');
    console.log('   • Ensure you have push access to the repository');
    console.log('   • Check the GitHub Actions tab for detailed error logs');
    process.exit(1);
}