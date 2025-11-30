export interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  layout: 'cover' | 'concept' | 'media-text' | 'grid' | 'list' | 'outro';
  content: {
    title?: string;
    text?: string[];
    bullets?: string[];
    media?: {
      type: 'image' | 'video';
      src?: string;
      caption?: string;
      placeholderText?: string;
    }[];
    code?: string;
    sections?: {
      title: string;
      icon?: string;
      description: string;
    }[];
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}