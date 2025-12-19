# Quick SEO Configuration Reference

## 🔧 Files to Update with Your Business Info

### 1. **Domain URL** (Update in all files)
Current: `https://novarosolutions.com`

**Files to update:**
- `/app/layout.tsx` - Line 17 (metadataBase)
- `/app/sitemap.ts` - Line 4 (baseUrl)
- `/app/robots.ts` - Line 12 (sitemap URL)
- `/components/shared/StructuredData.tsx` - Multiple locations

**Find & Replace:**
```bash
# In your editor, find and replace:
OLD: https://novarosolutions.com
NEW: https://youractual domain.com
```

---

### 2. **Business Contact Information**

Update in `/components/shared/StructuredData.tsx`:

```typescript
email: 'support@novarosolutions.com',
telephone: '+234-802-573-3103',
```

**Change to your actual:**
- Email
- Phone number
- Social media URLs

---

### 3. **Business Location**

If you have a physical location, update in `/components/shared/StructuredData.tsx`:

```typescript
address: {
  '@type': 'PostalAddress',
  streetAddress: '123 Your Street',        // ← Add this
  addressLocality: 'Your City',            // ← Add this
  addressRegion: 'Your State/Province',    // ← Add this
  postalCode: '12345',                     // ← Add this
  addressCountry: 'US',                    // ← Change country code
}
```

**Current Setup:**
```typescript
address: {
  '@type': 'PostalAddress',
  addressLocality: 'Remote',
  addressCountry: 'Global',
}
```

---

### 4. **Google Search Console Verification**

After deploying your site:

1. Go to: https://search.google.com/search-console
2. Add your property
3. Get verification code
4. Update `/app/layout.tsx` line 58:

```typescript
verification: {
  google: 'paste-your-code-here',
},
```

---

### 5. **Social Media URLs**

Update in `/components/shared/StructuredData.tsx`:

```typescript
sameAs: [
  'https://twitter.com/yourhandle',
  'https://linkedin.com/company/yourcompany',
  'https://facebook.com/yourpage',
  'https://instagram.com/yourhandle',  // Add if needed
],
```

---

### 6. **Logo & Images**

Current logo:
```
https://res.cloudinary.com/matthew-ayinde/image/upload/v1765277527/logo_ztqc4e.jpg
```

**To update:**
- Upload your logo to Cloudinary or another CDN
- Replace the URL in:
  - `/app/layout.tsx` (Open Graph image)
  - `/components/shared/StructuredData.tsx` (logo field)

**Recommended sizes:**
- Logo: 500x500px (square)
- OG Image: 1200x630px (for social sharing)

---

## 🚀 After Deployment

### Must-Do List:

1. **Test URLs Work:**
   - Visit `https://yoursite.com/sitemap.xml`
   - Visit `https://yoursite.com/robots.txt`
   - Both should load properly

2. **Validate Structured Data:**
   - Go to: https://validator.schema.org/
   - Enter your homepage URL
   - Fix any errors shown

3. **Test Social Sharing:**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: Share a post and check preview

4. **Google Search Console:**
   - Add property
   - Verify ownership
   - Submit sitemap
   - Request indexing for main pages

---

## 📝 Quick SEO Checklist

- [ ] Updated all domain URLs
- [ ] Updated business contact info
- [ ] Updated business location (if applicable)
- [ ] Added Google verification code
- [ ] Updated social media URLs
- [ ] Tested sitemap loads
- [ ] Tested robots.txt loads
- [ ] Validated structured data
- [ ] Tested Open Graph preview
- [ ] Submitted to Google Search Console
- [ ] Set up Google Analytics

---

## 🎯 Priority Update Order

1. **FIRST**: Update domain URL everywhere
2. **SECOND**: Update contact information
3. **THIRD**: Get Google Search Console verification
4. **FOURTH**: Test everything works
5. **FIFTH**: Submit sitemap to Google

---

## 💡 Pro Tips

### For Better Rankings:
1. Add unique, quality content to each page (500+ words)
2. Use your target keywords naturally in content
3. Get customer testimonials with photos
4. Create a blog section (highly recommended)
5. Build backlinks from relevant sites

### For Local SEO (if applicable):
1. Create Google Business Profile
2. Get listed in local directories
3. Encourage customer reviews
4. Use location-specific keywords
5. Create location-specific landing pages

---

## 🆘 Common Issues & Fixes

### Issue: Sitemap not loading
**Fix:** Check `NEXT_PUBLIC_SITE_URL` is set in environment variables

### Issue: Schema validation errors
**Fix:** Test at validator.schema.org and fix any syntax errors

### Issue: Pages not showing in Google
**Fix:** Wait 1-2 weeks, or manually request indexing in Search Console

### Issue: Wrong preview image on social media
**Fix:** Use debug tools to clear cache, then check OG image URL is correct

---

*Keep this file handy for quick reference!*
