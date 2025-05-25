# Modern Portfolio Website

A modern, interactive portfolio website built with Next.js 14, featuring stunning UI components and animations. This portfolio is designed to showcase your professional work, skills, and experiences in a visually appealing and interactive manner.

## ✨ Live Demo

[View Live Demo](your-deployed-url-here)

## 🎯 Purpose

This portfolio website serves as a professional showcase featuring:
- Personal branding and professional identity
- Project demonstrations with live previews
- Professional experience timeline
- Skills and expertise showcase
- Interactive contact methods
- Client testimonials and feedback

## 🚀 Features

- Modern UI/UX with beautiful animations
- Interactive 3D Globe visualization
- Responsive layout with Tailwind CSS
- Dynamic text generation effects
- Floating navigation bar
- Project showcase with bento grid layout
- Contact form
- Experience timeline
- Client testimonials
- Custom UI components including:
  - Magic buttons
  - Moving borders
  - Canvas reveal effects
  - Infinite cards
  - Spotlight effects
  - Layout grid
  - Hover effects

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Sentry](https://sentry.io/) - Error tracking
- Three.js - 3D visualizations

## 📦 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
SENTRY_AUTH_TOKEN=your-sentry-token
```

4. **Run Development Server**
```bash
npm run dev
```

5. **Build for Production**
```bash
npm run build
```

6. **Start Production Server**
```bash
npm start
```

Your site will be available at [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js app router pages and layouts
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── BentoGrid.tsx      # Bento grid layout
│   │   ├── FloatingNavbar.tsx # Navigation component
│   │   ├── Globe.tsx          # 3D globe visualization
│   │   └── ...               # Other UI components
│   ├── Hero.tsx          # Hero section
│   ├── Experience.tsx    # Experience timeline
│   └── ...              # Other page sections
├── data/                 # Static data and configurations
├── lib/                  # Utility functions and helpers
├── public/              # Static assets and images
└── styles/             # Global styles and CSS modules
```

### Key Components

1. **UI Components (`/components/ui/`)**
   - `BentoGrid.tsx` - Responsive grid layout for projects
   - `FloatingNavbar.tsx` - Animated navigation bar
   - `Globe.tsx` - Interactive 3D globe visualization
   - `TextGenerateEffect.tsx` - Text animation effects
   - `Spotlight.tsx` - Spotlight hover effects

2. **Page Sections (`/components/`)**
   - `Hero.tsx` - Landing section
   - `Experience.tsx` - Professional timeline
   - `ContactMe.tsx` - Contact form
   - `RecentProjects.tsx` - Project showcase
   - `Clients.tsx` - Client testimonials

## 🌐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Required
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com

# Optional - for error tracking
SENTRY_AUTH_TOKEN=your-sentry-token
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project

# Optional - for contact form
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASSWORD=your-password
```

## 🎨 Customization

1. **Colors and Theme**
   - Edit `tailwind.config.ts` to modify the color scheme
   - Update `globals.css` for global styles

2. **Content**
   - Modify data files in `/data` directory
   - Update images in `/public` directory
   - Customize component text in respective files

3. **Components**
   - Add/remove sections in `app/page.tsx`
   - Modify animations in UI components
   - Customize 3D globe parameters in `Globe.tsx`

## 🔍 SEO

The project includes:
- Dynamic metadata
- Structured data
- Open Graph tags
- Sitemap generation
- Robots.txt

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports

Report bugs by opening an issue. Include:
- Browser and OS version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📧 Contact

For questions or support, please email: mohdmursaleen9306@gmail.com(mailto:mohdmursaleen9306@gmail.com)

---

Made with ❤️ by Mursaleen
