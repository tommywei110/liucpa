# Liu CPA Firm Website

A professional static website for Liu CPA built with Next.js, React, and Tailwind CSS.

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/liucpa](http://localhost:3000/liucpa) to see your site.

### Build

To create a production build:

```bash
npm run build
```

This will generate static files in the `out` directory.

## Deploying to GitHub Pages

### One-time Setup

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "Pages" in the left sidebar
   - Under "Build and deployment", select "GitHub Actions" as the source

### Automatic Deployment

After the initial setup, the site will automatically deploy when you push to the `main` branch. The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`.

Your site will be available at: `https://tommywei110.github.io/liucpa/`

## Customization

### Update Content

- Edit `app/page.tsx` to change the site content
- Update contact information, services, and descriptions
- Modify the color scheme in Tailwind classes

### Styling

The site uses Tailwind CSS for styling. You can customize:
- Colors: Currently using blue-900 as the primary color
- Layout: Modify the responsive grid and spacing
- Typography: Adjust font sizes and weights

### Configuration

- `next.config.js`: Contains the basePath for GitHub Pages
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration

## Project Structure

```
liucpa/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page content
├── public/              # Static assets
├── .github/workflows/   # GitHub Actions deployment
└── package.json         # Dependencies and scripts
```

## Technologies

- Next.js 16 (with static export)
- React 19
- Tailwind CSS 3
- TypeScript
- GitHub Pages for hosting
