# Wings'25 Website

A modern, dynamic website for Wings'25 - a technical festival. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring fluid animations and responsive design.

## Features

- 🎨 Modern UI/UX with Framer Motion animations
- 📱 Fully responsive design
- 🌙 Dark mode optimized
- 🔥 Interactive event showcase
- 📸 Dynamic image gallery
- 👥 Team portfolio
- 📅 Detailed event schedule
- 🤝 Sponsor showcase
- ✨ Custom loading animations
- 📝 Registration system with Prisma & Supabase

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Database:** Prisma
- **Icons:** Lucide Icons

## Project Structure

```
wings-www/
├── app/                   # Next.js app router pages
│   ├── (root)/           # Root layout and page
│   ├── api/              # API routes
│   ├── events/           # Events page
│   ├── gallery/          # Gallery page
│   ├── register/         # Registration page
│   ├── schedule/         # Schedule page
│   ├── sponsors/         # Sponsors page
│   └── team/             # Team page
├── components/           # React components
├── lib/                  # Utilities and types
├── public/              # Static assets
└── styles/              # Global styles
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/tejas242/wings.git
   ```

2. Install dependencies:
   ```bash
   cd wings-www
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Pages

- **Home (`/`)**: Landing page with hero section and event overview
- **Events (`/events`)**: Interactive event showcase with details
- **Gallery (`/gallery`)**: Dynamic image gallery with filtering
- **Schedule (`/schedule`)**: Detailed event timeline
- **Team (`/team`)**: Team member showcase
- **Sponsors (`/sponsors`)**: Sponsor showcase with tiers
- **Register (`/register`)**: Registration portal

## Styling

The project uses Tailwind CSS with custom utilities and configurations:
- Custom color schemes
- Responsive design breakpoints
- Animation utilities
- Custom font configurations

## Development

- Follow TypeScript strict mode
- Use ESLint for code quality
- Maintain component-based architecture
- Follow Next.js best practices

## License

This project is licensed under the MIT License - see the LICENSE file for details.
