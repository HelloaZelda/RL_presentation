import React from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';

interface MediaPlaceholderProps {
  type: 'video' | 'image';
  src?: string;
  ratio?: string;
  text?: string;
  caption?: string;
  height?: string;
}

const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({ type, src, ratio, text, caption, height = 'h-64' }) => {
  const aspectStyle = ratio ? { aspectRatio: ratio } : undefined;
  const fallbackText = text || (src ? `请放入文件：${src}` : type === 'video' ? '等待上传视频' : '等待上传图片');

  const renderMedia = () => {
    if (type === 'video' && src) {
      return (
        <video
          src={src}
          controls
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      );
    }

    if (type === 'image' && src) {
      return <img src={src} alt={caption || text || 'Media'} className="w-full h-full object-cover" />;
    }

    return (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-full mb-3 border border-white/10 group-hover:scale-110 transition-transform duration-300">
            {type === 'video' ? <Play className="w-8 h-8 text-white fill-current" /> : <ImageIcon className="w-8 h-8 text-white" />}
          </div>
          <span className="text-white font-medium text-center drop-shadow-md px-4 py-1 bg-white/10 rounded-full text-sm">
            {fallbackText}
          </span>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className={`relative w-full ${height} bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl group cursor-pointer`}
        style={aspectStyle}
      >
        {renderMedia()}

        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      {caption && <p className="text-gray-400 text-sm text-center italic">{caption}</p>}
    </div>
  );
};

export default MediaPlaceholder;
