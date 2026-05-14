# Renegade Retail

**Nationwide Retail Execution Without the Chaos.**

A premium Next.js website for Renegade Retail, showcasing services for retail fixture installation, graphics deployment, national rollouts, and experiential environments.

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Renegade15/renegaderetail69.git
cd renegaderetail69

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
renegade-retail/
├── app/
│   ├── globals.css          # Global Tailwind styles
│   ├── layout.js            # Root layout component
│   └── page.js              # Home page
├── public/                  # Static assets (images, logos)
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json
├── next.config.js
└── README.md
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Git Repository"
4. Select your GitHub repository
5. Click "Deploy"

Vercel automatically handles:
- Hosting
- SSL certificates
- Builds
- Automatic deployments on push

### Connect a Custom Domain

1. In Vercel dashboard, go to **Settings → Domains**
2. Add your domain (e.g., `renegaderetail.com`)
3. Update DNS records at your registrar:

**Type: A**
- Name: `@`
- Value: `76.76.21.21`

**Type: CNAME**
- Name: `www`
- Value: `cname.vercel-dns.com`

## Features

✅ Fully responsive design
✅ Tailwind CSS for styling
✅ Fast performance with Next.js optimization
✅ SEO-ready metadata
✅ Smooth scroll behavior
✅ Modern dark theme with white accent sections

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - JavaScript library

## License

All rights reserved © Renegade Retail
