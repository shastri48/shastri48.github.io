import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  const [width, height] = params.params;
  
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#3b82f6"/>
      <circle cx="50%" cy="40%" r="25%" fill="#ffffff" opacity="0.3"/>
      <circle cx="50%" cy="75%" r="35%" fill="#ffffff" opacity="0.3"/>
      <text x="50%" y="90%" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="14" opacity="0.7">
        Abhishek Shastri
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
