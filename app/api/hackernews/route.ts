import { NextRequest, NextResponse } from 'next/server';
import { fetchStories, searchStories } from '@/lib/api';
import { StoryType } from '@/lib/types';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = (searchParams.get('type') as StoryType) || 'top';
  const limit = parseInt(searchParams.get('limit') || '30', 10);
  const query = searchParams.get('query') || '';
  
  try {
    if (query) {
      const stories = await searchStories(query, limit);
      return NextResponse.json({ stories });
    } else {
      const stories = await fetchStories(type, limit);
      return NextResponse.json({ stories });
    }
  } catch (error) {
    console.error('Error fetching stories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stories' },
      { status: 500 }
    );
  }
}