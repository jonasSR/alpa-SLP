# Vercel Web Analytics - ALPA Website

This document describes the Vercel Web Analytics integration for the ALPA (Associação Luizense Protetora dos Animais) website.

## Overview

Vercel Web Analytics has been integrated into the ALPA website to track visitor behavior and website performance metrics. This enables the organization to:

- Monitor website traffic and visitor patterns
- Track page views and user interactions
- Identify popular content and adoption pages
- Measure the effectiveness of donation and awareness campaigns

## Setup

### Enabling Web Analytics

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the ALPA project
3. Click the **Analytics** tab
4. Click **Enable** to activate Web Analytics

### Configuration Files

The following files have been configured for Web Analytics support:

#### `vercel.json`
```json
{
  "buildCommand": "echo 'Static site - no build required'",
  "outputDirectory": "./",
  "webAnalytics": {
    "enabled": true
  }
}
```

This configuration:
- Declares the project as a static site
- Enables web analytics tracking
- Specifies the root directory as the output

#### `package.json`
```json
{
  "name": "alpa-slp",
  "version": "1.0.0",
  "description": "Website for ALPA - animal protection organization",
  "devDependencies": {
    "@vercel/analytics": "^1.4.0"
  }
}
```

The `@vercel/analytics` package is included as a dev dependency for reference, though for static HTML sites, the analytics script is injected automatically by Vercel.

### HTML Integration

The `index.html` file includes the necessary Vercel Web Analytics setup:

```html
<script>
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

These scripts:
1. Initialize the `window.va` function as a queue for analytics events
2. Load the Vercel insights tracking script after page loads

## Deployment

When you deploy the site to Vercel:

```bash
vercel deploy
```

The analytics will automatically track:
- **Page Views**: Every time a user visits a page
- **Web Vitals**: Performance metrics (LCP, FID, CLS)
- **Routes**: User navigation patterns

## Viewing Analytics Data

After deployment and with user traffic:

1. Go to your Vercel Dashboard
2. Select the ALPA project
3. Click the **Analytics** tab
4. View metrics including:
   - Total page views
   - Unique visitors
   - Top pages
   - Web performance metrics

## Important Notes

- **Route Tracking**: Analytics automatically detects route changes on the static site
- **Privacy**: Vercel Web Analytics respects user privacy and doesn't use cookies for tracking
- **Verification**: Check your browser's Network tab for requests to `/_vercel/insights/script.js` to confirm analytics is working
- **Dashboard Access**: Analytics data will be available in the Vercel dashboard after the first few users visit the site

## Next Steps

- Monitor traffic patterns to understand visitor behavior
- Use insights to improve content and user experience
- Track campaign effectiveness through page view trends
- Share analytics data with the ALPA team to inform strategy

## Resources

- [Vercel Web Analytics Documentation](https://vercel.com/analytics)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Privacy and Compliance](https://vercel.com/docs/analytics/privacy-policy)
