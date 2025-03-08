import { Story, StoryDetails, StoryType } from './types';

const HN_API_BASE = 'https://hacker-news.firebaseio.com/v0';
const HN_ITEM_URL = `${HN_API_BASE}/item`;
const HN_USER_URL = `${HN_API_BASE}/user`;

export async function fetchStoryIds(type: StoryType = 'top', limit: number = 30): Promise<number[]> {
  const response = await fetch(`${HN_API_BASE}/${type}stories.json`);
  const ids = await response.json();
  return ids.slice(0, limit);
}

export async function fetchStory(id: number): Promise<Story> {
  const response = await fetch(`${HN_ITEM_URL}/${id}.json`);
  return await response.json();
}

export async function fetchStories(type: StoryType = 'top', limit: number = 30): Promise<Story[]> {
  const ids = await fetchStoryIds(type, limit);
  const stories = await Promise.all(ids.map(id => fetchStory(id)));
  return stories.filter(Boolean); // Filter out any null responses
}

export async function searchStories(query: string, limit: number = 30): Promise<Story[]> {
  const topStories = await fetchStories('top', 100);
  const newStories = await fetchStories('new', 100);
  
  const allStories = [...topStories, ...newStories];
  const uniqueStories = allStories.filter((story, index, self) => 
    index === self.findIndex((s) => s.id === story.id)
  );
  
  const filteredStories = uniqueStories.filter(story => 
    story.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return filteredStories.slice(0, limit);
}

export function formatTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  }
  
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}