export interface Story {
    id: number;
    title: string;
    url: string;
    score: number;
    by: string;
    time: number;
    descendants: number; // number of comments
    kids?: number[]; // comment IDs
  }
  
  export interface StoryDetails extends Story {
    text?: string;
    type: string;
  }
  
  export type StoryType = 'top' | 'new' | 'best' | 'ask' | 'show' | 'job';