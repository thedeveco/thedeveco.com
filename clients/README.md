# Client Logos Directory

This directory is used to store client and partner logos that will be automatically displayed on the website.

## How to Add Logos

1. **File Naming**: Use lowercase company names
   - ✅ `microsoft.png`
   - ✅ `google.svg`
   - ✅ `meta.jpg`
   - ❌ `Microsoft.PNG`
   - ❌ `Google Inc.svg`

2. **Supported Formats**:
   - PNG (recommended for logos with transparency)
   - SVG (recommended for scalability)
   - JPG/JPEG (for photographs)
   - WebP (for optimized loading)

3. **Recommended Specifications**:
   - **Size**: 200x100px or similar 2:1 aspect ratio
   - **Background**: Transparent (for PNG/SVG) or white
   - **Quality**: High resolution but optimized for web
   - **File Size**: Under 50KB per image

## Examples

```
clients/
├── avnet.png
├── hackster.svg
├── microsoft.png
├── google.png
├── nvidia.svg
└── qualcomm.jpg
```

## Automatic Display

The ClientLogos component will automatically:
- Scan this directory for images
- Display them in a rotating carousel
- Handle loading errors gracefully
- Show placeholder text if no logos are found

## Logo Guidelines

- **Legal**: Ensure you have permission to use company logos
- **Quality**: Use official logos from company brand guidelines
- **Consistency**: Try to maintain similar visual weight across logos
- **Optimization**: Compress images for web performance

## Testing

After adding logos:
1. Restart the development server: `npm run dev`
2. Visit the homepage to see the client logos section
3. Check browser console for any loading errors
4. Test on different screen sizes for responsiveness

## Deployment

Logos in this directory will automatically be included in the production build and deployed to Digital Ocean App Platform.