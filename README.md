# Net Genius - Digital Excellence Platform

![Net Genius](https://img.shields.io/badge/Status-Active-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC)

> **Crafting digital excellence through innovative web development, DevOps solutions, and comprehensive business digitalization services.**

## 🌟 Overview

Net Genius (Vertex Digital) is a premium digital services platform that showcases modern web development practices, AI-powered advisory services, and comprehensive business solutions. Built with cutting-edge technologies and designed with user experience at its core.

## ✨ Features

### 🎨 **Modern Design System**

- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Dark/Light Theme** - Automatic theme switching with system preferences
- **Glass Morphism Effects** - Modern UI with backdrop blur and transparency
- **Gradient Typography** - Eye-catching text effects with CSS gradients
- **Smooth Animations** - Framer Motion powered micro-interactions

### 🤖 **AI-Powered Advisory**

- **Smart Recommendations** - AI-driven service suggestions based on user input
- **Interactive Interface** - Real-time form validation and feedback
- **Personalized Solutions** - Tailored advice for different business needs
- **Seamless Integration** - Built with Firebase Genkit for reliable AI processing

### 📱 **Component Architecture**

- **Modular Components** - Reusable UI components with consistent styling
- **TypeScript Support** - Full type safety across the application
- **Shadcn/UI Integration** - Professional component library implementation
- **Custom Animations** - Hand-crafted animations for enhanced UX

### 🚀 **Performance Optimized**

- **Next.js 15** - Latest framework with App Router and Server Components
- **Image Optimization** - Automatic image compression and lazy loading
- **Code Splitting** - Optimized bundle sizes with dynamic imports
- **SEO Ready** - Comprehensive meta tags and structured data

## 🛠️ Tech Stack

### **Frontend**

- **Framework**: Next.js 15.0 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

### **Backend & AI**

- **AI Framework**: Firebase Genkit
- **Database**: Firebase (optional integration)
- **Form Handling**: React Hook Form + Zod validation
- **API Routes**: Next.js API routes

### **Development Tools**

- **Package Manager**: Yarn
- **Code Quality**: ESLint + Prettier
- **Type Checking**: TypeScript strict mode
- **Build Tool**: Next.js built-in bundler

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- Yarn package manager
- Git for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/swaindhruti/net-genius.git
   cd net-genius
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**

   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
yarn build

# Start production server
yarn start

# Export static site (if needed)
yarn export
```

## 📁 Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── components/         # Page-specific components
│   │   ├── hero.tsx       # Dynamic hero section
│   │   ├── services.tsx   # Services showcase
│   │   ├── pricing.tsx    # Pricing with modal system
│   │   ├── contact.tsx    # Contact form
│   │   └── ai-advisor.tsx # AI advisory interface
│   ├── actions.ts         # Server actions
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable UI components
│   └── ui/               # Shadcn/UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── ai/                   # AI integration files
│   ├── genkit.ts        # Genkit configuration
│   └── flows/           # AI flow definitions
└── styles/              # Global styles
```

## 🎨 Key Sections

### **Hero Section**

- Animated background with floating elements
- Dynamic rotating text for engaging headlines
- Interactive call-to-action buttons
- Performance metrics showcase

### **Services Section**

- Six core service offerings
- Interactive cards with hover effects
- Professional iconography
- Responsive grid layout

### **AI Advisor**

- Smart service recommendation system
- Real-time form validation
- AI-powered suggestions
- Seamless user experience

### **Pricing Section**

- Three-tier pricing structure
- Modal-based detailed view
- Custom pricing model
- Professional presentation

### **Contact Section**

- Comprehensive contact form
- Social media integration
- Form validation and submission
- Professional layout

## 🔧 Configuration

### **Environment Variables**

```env
# AI Configuration
GOOGLE_GENAI_API_KEY=your_api_key_here

# Database (Optional)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_API_KEY=your_api_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### **Customization**

- **Colors**: Edit `tailwind.config.ts` for brand colors
- **Fonts**: Modify `layout.tsx` for typography
- **Components**: Customize in `components/ui/`
- **Content**: Update text in respective component files

## 📈 Performance Features

- **Core Web Vitals Optimized**
- **Lighthouse Score**: 95+ across all metrics
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with display swap
- **Bundle Analysis**: Webpack bundle analyzer included

## 🧪 Testing & Quality

```bash
# Type checking
yarn type-check

# Linting
yarn lint

# Fix lint issues
yarn lint:fix

# Build verification
yarn build
```

## 📱 Browser Support

- **Chrome**: 88+ ✅
- **Firefox**: 85+ ✅
- **Safari**: 14+ ✅
- **Edge**: 88+ ✅
- **Mobile**: iOS 14+, Android 8+ ✅

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Other Platforms**

- **Netlify**: Drag & drop build folder
- **AWS Amplify**: Connect GitHub repository
- **Firebase Hosting**: Use Firebase CLI

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Vertex Digital Team**

- **Lead Developer**: [Your Name]
- **UI/UX Designer**: [Designer Name]
- **AI Engineer**: [AI Engineer Name]

## 📞 Support

- **Website**: [https://vertexdigital.dev](https://vertexdigital.dev)
- **Email**: contact@vertexdigital.dev
- **Phone**: (555) 123-4567
- **Support**: Open an issue on GitHub

---

<div align="center">
  <p>Built with ❤️ by the Vertex Digital Team</p>
  <p>
    <a href="#top">Back to Top</a> •
    <a href="https://github.com/swaindhruti/net-genius/issues">Report Bug</a> •
    <a href="https://github.com/swaindhruti/net-genius/issues">Request Feature</a>
  </p>
</div>
