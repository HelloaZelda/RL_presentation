import React, { useState, useEffect } from 'react';
import { Play, Image as ImageIcon, AlertCircle, PlusCircle } from 'lucide-react';

interface MediaPlaceholderProps {
  type: 'video' | 'image';
  src?: string;
  text?: string;
  caption?: string;
  height?: string;
}

const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({ type, src, text, caption, height = 'h-64' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
    setIsPlaying(false); // Reset play state when slide source changes
  }, [src]);

  // Generate a stable random seed based on text or fallback
  const seed = text ? text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 123;
  const placeholderUrl = `https://picsum.photos/seed/${seed}/800/600`;

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (type === 'video') {
      if (!currentSrc) {
        // Prompt user to add a video URL if missing
        const userUrl = window.prompt("请输入视频链接 (支持 Bilibili BV号 / YouTube / MP4): \n例如: BV1wC4y1H7CL");
        if (userUrl) {
          let formattedUrl = userUrl;
          // Auto-convert Bilibili BV IDs to embed URL
          const bvMatch = userUrl.match(/(BV\w+)/);
          if (bvMatch) {
            formattedUrl = `//player.bilibili.com/player.html?bvid=${bvMatch[1]}&page=1&high_quality=1&danmaku=0`;
          } else if (userUrl.includes('youtube.com/watch?v=')) {
             const vId = userUrl.split('v=')[1]?.split('&')[0];
             if (vId) formattedUrl = `https://www.youtube.com/embed/${vId}`;
          }
          
          setCurrentSrc(formattedUrl);
          setIsPlaying(true);
        }
      } else {
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div 
        className={`relative w-full ${height} bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl group cursor-pointer transition-all duration-300 hover:border-orange-500/50 hover:shadow-orange-500/10`}
        onClick={handlePlay}
      >
        {/* Video Player State */}
        {isPlaying && type === 'video' && currentSrc ? (
          <iframe
            src={currentSrc}
            title={text || "Video player"}
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          /* Thumbnail / Placeholder State */
          <>
            <img 
              src={!imgError && currentSrc && type === 'image' ? currentSrc : placeholderUrl} 
              onError={() => setImgError(true)}
              alt={text || "Media Content"} 
              className={`w-full h-full object-cover transition-opacity duration-500 transform group-hover:scale-105 ${type === 'video' ? 'opacity-60 group-hover:opacity-40' : 'opacity-90'}`}
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              {/* Icon Circle */}
              <div className={`
                backdrop-blur-sm p-4 rounded-full mb-3 border border-white/10 
                transition-all duration-300 group-hover:scale-110 shadow-lg
                ${type === 'video' ? 'bg-orange-600/80 group-hover:bg-orange-500' : 'bg-black/50'}
              `}>
                 {type === 'video' ? (
                   currentSrc ? <Play className="w-8 h-8 text-white fill-current ml-1" /> : <PlusCircle className="w-8 h-8 text-white" />
                 ) : (
                   <ImageIcon className="w-8 h-8 text-white" />
                 )}
              </div>

              {/* Text Label */}
              <span className="text-white font-medium text-center drop-shadow-md px-4 py-1 bg-black/60 backdrop-blur-md rounded-full text-sm border border-white/10">
                {type === 'video' && !currentSrc ? '点击添加视频链接' : (text || (type === 'video' ? '点击播放' : '图片展示'))}
              </span>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </>
        )}
      </div>
      {caption && <p className="text-gray-400 text-sm text-center italic border-l-2 border-orange-500/50 pl-2 mx-auto mt-2 max-w-lg">{caption}</p>}
    </div>
  );
};

export default MediaPlaceholder;