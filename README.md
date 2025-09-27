# LBSIT Institute Website

A modern, responsive website for LBSIT Institute built with React, Tailwind CSS, and deployed on GitHub Pages.

## 🚀 Live Demo

Visit the live website here: [https://Nileshunique.github.io/lbsit_institute](https://Nileshunique.github.io/lbsit_institute)

## 📋 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Course Catalog**: Comprehensive listing of available courses
- **Book Downloads**: Digital books and resources
- **Contact Forms**: EmailJS integration for contact functionality
- **SEO Optimized**: React Helmet for meta tags and SEO
- **Performance Optimized**: Lazy loading, image optimization, and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 6.28.0
- **Icons**: Heroicons React 2.1.5
- **Email Service**: EmailJS Browser 4.4.1
- **SEO**: React Helmet Async 2.0.5
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nileshunique/lbsit_institute.git
   cd lbsit_institute
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 GitHub Pages Deployment Guide

### Step 1: Create GitHub Repository

1. **Create a new repository on GitHub**
   - Repository name: `lbsit_institute`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/Nileshunique/lbsit_institute.git
   git branch -M main
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### Step 2: Configure GitHub Pages

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click on "Settings" tab

2. **Enable GitHub Pages**
   - Scroll down to "Pages" section in the left sidebar
   - Under "Source", select "GitHub Actions"

### Step 3: Set up Environment Secrets

1. **Go to Repository Secrets**
   - In your repository, go to Settings → Secrets and variables → Actions
   - Click "New repository secret"

2. **Add EmailJS Secrets**
   Add these three secrets:
   ```
   REACT_APP_EMAILJS_SERVICE_ID = your_emailjs_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID = your_emailjs_template_id  
   REACT_APP_EMAILJS_PUBLIC_KEY = your_emailjs_public_key
   ```

### Step 4: Configure EmailJS (Optional)

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Note down the Service ID

3. **Create Email Template**
   - Create a new email template
   - Use variables like `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Note down the Template ID

4. **Get Public Key**
   - Go to Account → API Keys
   - Copy your Public Key

### Step 5: Deploy

1. **Automatic Deployment**
   - The GitHub Action will automatically trigger on push to main branch
   - Check the "Actions" tab to see deployment progress

2. **Manual Deployment** (Alternative)
   ```bash
   npm run build
   npm run deploy
   ```

### Step 6: Custom Domain (Optional)

1. **Add CNAME file**
   - The workflow already includes CNAME configuration
   - Update the `cname` field in `.github/workflows/deploy.yml`

2. **Configure DNS**
   - Point your domain to GitHub Pages
   - Add CNAME record: `lbsit_institute.com` → `nileshunique.github.io`

## 📁 Project Structure

```
lbsit_institute/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── CourseCard.jsx
│   │   ├── BookCard.jsx
│   │   ├── SEO.jsx
│   │   ├── LazyImage.jsx
│   │   ├── LazyMap.jsx
│   │   └── PerformanceMonitor.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── Books.jsx
│   │   └── Contact.jsx
│   ├── constants/
│   │   └── siteData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages
- `npm run eject` - Eject from Create React App

## 🎨 Customization

### Update Site Information

Edit `src/constants/siteData.js` to update:
- Site name and tagline
- Contact information
- Course listings
- Book catalog
- Social media links

### Styling

- **Colors**: Update `tailwind.config.js` for custom color schemes
- **Fonts**: Modify font imports in `src/index.css`
- **Components**: Edit component files in `src/components/`

### Content

- **Pages**: Update content in `src/pages/`
- **Images**: Replace placeholder images with actual content
- **SEO**: Update meta tags in individual page components

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check for missing dependencies: `npm install`
   - Verify environment variables are set correctly

2. **Deployment Fails**
   - Ensure GitHub Pages is enabled
   - Check GitHub Actions logs for errors
   - Verify repository secrets are set

3. **EmailJS Not Working**
   - Verify EmailJS credentials in environment variables
   - Check EmailJS service and template configuration
   - Ensure domain is added to EmailJS allowed origins

4. **Images Not Loading**
   - Check image URLs in `siteData.js`
   - Ensure images are accessible and properly formatted

### Performance Optimization

- Images are lazy-loaded by default
- Code splitting is implemented for better performance
- Tailwind CSS is purged in production builds
- Service worker is enabled for caching

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: lbsitinstitute2012@gmail.com
- Phone: +91-9971556986
- Website: [https://Nileshunique.github.io/lbsit_institute](https://Nileshunique.github.io/lbsit_institute)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Heroicons](https://heroicons.com/) - Icon Library
- [EmailJS](https://www.emailjs.com/) - Email Service
- [Unsplash](https://unsplash.com/) - Stock Photos