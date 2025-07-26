// Image Verification Utility for Prativa On Canvas
// This script helps verify which images exist in the GitHub repository

const expectedImages = [];

// Generate art-1.jpg to art-40.jpg
for (let i = 1; i <= 40; i++) {
    expectedImages.push(`art-${i}.jpg`);
}

// Add additional images
expectedImages.push('featured-artwork.jpg', 'artist-photo.jpg');

const baseUrl = 'https://prativaoncanvas.github.io/en/arts/';

/**
 * Verify image availability
 * Run this in browser console to check which images are available
 */
async function verifyImages() {
    console.log('🎨 Verifying Prativa On Canvas repository images...\n');
    
    const results = {
        available: [],
        missing: [],
        errors: []
    };
    
    for (const imageName of expectedImages) {
        const imageUrl = baseUrl + imageName;
        
        try {
            const response = await fetch(imageUrl, { method: 'HEAD' });
            
            if (response.ok) {
                results.available.push(imageName);
                console.log(`✅ ${imageName} - Available`);
            } else {
                results.missing.push(imageName);
                console.log(`❌ ${imageName} - Missing (${response.status})`);
            }
        } catch (error) {
            results.errors.push({ image: imageName, error: error.message });
            console.log(`⚠️  ${imageName} - Error: ${error.message}`);
        }
        
        // Small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log('\n📊 Summary:');
    console.log(`✅ Available: ${results.available.length}/${expectedImages.length}`);
    console.log(`❌ Missing: ${results.missing.length}/${expectedImages.length}`);
    console.log(`⚠️  Errors: ${results.errors.length}/${expectedImages.length}`);
    
    if (results.missing.length > 0) {
        console.log('\n📝 Missing images that need to be added to repository:');
        results.missing.forEach(img => console.log(`   - ${img}`));
    }
    
    return results;
}

/**
 * Generate image URLs for easy copying
 */
function generateImageUrls() {
    console.log('🔗 GitHub Raw Image URLs:\n');
    expectedImages.forEach(imageName => {
        console.log(`${imageName}: ${baseUrl}${imageName}`);
    });
}

/**
 * Alternative images mapping for fallback
 */
const alternativeImages = {};

// Generate fallback URLs for art-1.jpg to art-40.jpg
const fallbackImages = [
    'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400',
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400'
];

for (let i = 1; i <= 40; i++) {
    const fallbackIndex = (i - 1) % fallbackImages.length;
    alternativeImages[`art-${i}.jpg`] = fallbackImages[fallbackIndex];
}

// Add specific fallbacks for special images
alternativeImages['featured-artwork.jpg'] = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600';
alternativeImages['artist-photo.jpg'] = 'https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=400';

// Export for use in browser console
if (typeof window !== 'undefined') {
    window.verifyImages = verifyImages;
    window.generateImageUrls = generateImageUrls;
    window.alternativeImages = alternativeImages;
    
    console.log('🎨 Prativa On Canvas Image Verification Utility Loaded!');
    console.log('📝 Available functions:');
    console.log('   - verifyImages() - Check which images are available in repository');
    console.log('   - generateImageUrls() - List all expected image URLs');
    console.log('   - alternativeImages - Fallback image mappings');
}