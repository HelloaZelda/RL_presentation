import React from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';

interface MediaPlaceholderProps {
  type: 'video' | 'image';
  text?: string;
  caption?: string;
  height?: string;
}

const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({ type, text, caption, height = 'h-64' }) => {
  // Generate a random seed for picsum based on text length to keep it consistent per refresh for the same content
  const randomId = text ? text.length + (type === 'video' ? 100 : 0) : Math.floor(Math.random() * 1000);
  const bgUrl = `https://picsum.photos/seed/${randomId}/800/600`;

  return (
    <div className="flex flex-col gap-2 w-full">
      <div 
        className={`relative w-full ${height} bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl group cursor-pointer`}
      >
        <img 
          src={bgUrl} 
          alt="Placeholder" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-full mb-3 border border-white/10 group-hover:scale-110 transition-transform duration-300">
             {type === 'video' ? <Play className="w-8 h-8 text-white fill-current" /> : <ImageIcon className="w-8 h-8 text-white" />}
          </div>
          <span className="text-white font-medium text-center drop-shadow-md px-4 py-1 bg-black/30 rounded-full text-sm">
            {text || (type === 'video' ? 'Video Placeholder' : 'Image Placeholder')}
          </span>
        </div>
        
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      {caption && <p className="text-gray-400 text-sm text-center italic">{caption}</p>}
    </div>
  );
};

export default MediaPlaceholder;
