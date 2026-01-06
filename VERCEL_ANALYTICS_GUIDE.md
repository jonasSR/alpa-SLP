# ALPA Website - Vercel Web Analytics Implementation Guide

## What Was Implemented

This project has been configured with Vercel Web Analytics to track visitor metrics and website performance. The implementation follows Vercel's best practices for static HTML sites.

## Files Created/Modified

### New Files
1. **`package.json`** - Project metadata and dependencies
   - Added `@vercel/analytics` as a dev dependency
   - Configured for use with Vercel deployments

2. **`vercel.json`** - Vercel deployment configuration
   - Enabled web analytics
   - Configured for static site serving

3. **`ANALYTICS_SETUP.md`** - Detailed setup documentation

### Modified Files
1. **`index.html`** - Updated with analytics scripts
   - Added `window.va` function initialization
   - Ensured `/_vercel/insights/script.js` script tag is present

## How It Works

### Analytics Script Flow

```
1. Page loads
   ↓
2. window.va function is initialized as a message queue
   ↓
3. /_vercel/insights/script.js loads asynchronously (defer)
   ↓
4. Analytics script starts tracking:
   - Page views
   - Core Web Vitals
   - User interactions
   ↓
5. Data is sent to Vercel servers
   ↓
6. Metrics appear in Vercel Dashboard
```

### What Gets Tracked

- **Page Views**: Count of visitors to each page
- **Core Web Vitals**: 
  - LCP (Largest Contentful Paint) - page load speed
  - FID (First Input Delay) - interactivity
  - CLS (Cumulative Layout Shift) - visual stability
- **Routes**: Navigation patterns across the site

## Deployment

To deploy the website with analytics enabled:

```bash
# Install dependencies (optional for static site)
npm install

# Deploy to Vercel
npm run deploy
# or
vercel deploy
```

## Verification

To verify analytics is working after deployment:

1. Visit your deployed site at `alpa-slp.vercel.app`
2. Open browser Developer Tools (F12)
3. Go to Network tab
4. Look for request to `/_vercel/insights/script.js` and `/_vercel/insights/view` 
5. Both should have 200 status codes

## Dashboard Access

After deployment:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the "alpa-slp" project
3. Click **Analytics** tab
4. View real-time visitor metrics

Note: Initial data may take a few minutes to appear after first deployment.

## Important Notes

- **No Cookies**: Vercel Web Analytics respects privacy and doesn't use cookies
- **Privacy Compliant**: Compliant with GDPR, CCPA, and other privacy regulations
- **Always Enabled**: Once deployed, analytics runs automatically
- **No Performance Impact**: Analytics tracking is lightweight and non-blocking

## Next Steps

1. Deploy the site to Vercel
2. Monitor analytics dashboard for visitor insights
3. Use data to improve user experience
4. Share metrics with ALPA team stakeholders
