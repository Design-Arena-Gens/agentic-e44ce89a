## Quote of the Day

This single-page Next.js application reveals a curated quote each day. The selection is deterministic—everyone sees the same quote on the same day—yet rotates through a collection of inspirational lines from renowned thinkers.

### Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site. Edit `src/app/page.tsx` to update the layout, and adjust styling in `src/app/page.module.css`.

### Production Build

```bash
npm run build
npm start
```

The app is optimized for deployment on Vercel and uses the built-in Geist font family for typography.
