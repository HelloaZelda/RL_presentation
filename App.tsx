import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideContent } from './types';
import MediaPlaceholder from './components/MediaPlaceholder';
import { 
  ChevronRight, 
  ChevronLeft, 
  Gamepad2, 
  Dog, 
  Cpu, 
  Brain, 
  Server, 
  Bone, 
  Zap, 
  Code as CodeIcon,
  Target,
  Repeat,
  Baby,
  Footprints,
  Activity,
  Globe,
  Shuffle,
  ShieldCheck,
  TrendingUp,
  Bot,
  Trophy,
  AlertTriangle,
  Wind,
  Smile,
  Layers,
  Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Icon mapping helper
const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Gamepad2': return <Gamepad2 className="w-8 h-8 md:w-12 md:h-12 text-blue-400" />;
    case 'Dog': return <Dog className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" />;
    case 'Cpu': return <Cpu className="w-8 h-8 md:w-12 md:h-12 text-green-400" />;
    case 'Brain': return <Brain className="w-8 h-8 text-pink-500" />;
    case 'Server': return <Server className="w-8 h-8 text-cyan-500" />;
    case 'Bone': return <Bone className="w-8 h-8 text-gray-300" />;
    case 'Hardware': return <Zap className="w-8 h-8 text-yellow-500" />;
    case 'Target': return <Target className="w-8 h-8 md:w-12 md:h-12 text-red-500" />;
    case 'Repeat': return <Repeat className="w-8 h-8 md:w-12 md:h-12 text-purple-500" />;
    case 'Baby': return <Baby className="w-8 h-8 md:w-12 md:h-12 text-pink-300" />;
    case 'Footprints': return <Footprints className="w-8 h-8 md:w-12 md:h-12 text-orange-300" />;
    case 'Activity': return <Activity className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />;
    case 'Globe': return <Globe className="w-8 h-8 text-green-500" />;
    case 'Shuffle': return <Shuffle className="w-8 h-8 text-indigo-400" />;
    case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
    case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-orange-400" />;
    case 'Bot': return <Bot className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />;
    case 'Trophy': return <Trophy className="w-8 h-8 md:w-12 md:h-12 text-yellow-500" />;
    case 'AlertTriangle': return <AlertTriangle className="w-8 h-8 md:w-12 md:h-12 text-red-400" />;
    case 'Wind': return <Wind className="w-8 h-8 md:w-12 md:h-12 text-blue-300" />;
    case 'Smile': return <Smile className="w-8 h-8 md:w-12 md:h-12 text-green-400" />;
    case 'Layers': return <Layers className="w-8 h-8 md:w-12 md:h-12 text-indigo-500" />;
    case 'Scale': return <Scale className="w-8 h-8 md:w-12 md:h-12 text-teal-400" />;
    default: return null;
  }
};

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide: SlideContent = SLIDES[currentSlideIndex];

  const goToNext = useCallback(() => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

  const goToPrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Slide Renderers based on layout type
  const renderSlideContent = (slide: SlideContent) => {
    switch (slide.layout) {
      case 'cover':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 md:space-y-12 px-4 relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 drop-shadow-sm tracking-tight mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-3xl text-orange-500 font-light">{slide.subtitle}</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-6 w-full max-w-5xl justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
               {slide.content.media?.map((m, i) => (
                 <MediaPlaceholder
                   key={i}
                   type={m.type}
                   src={m.src}
                   ratio={m.ratio}
                   text={m.placeholderText}
                   caption={m.caption}
                   height="h-48 md:h-64"
                 />
               ))}
            </motion.div>
          </div>
        );

      case 'concept':
        return (
          <div className="flex flex-col h-full justify-center px-6 md:px-12 max-w-7xl mx-auto w-full">
            <div className="mb-8 md:mb-16 border-l-4 border-orange-500 pl-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">{slide.title}</h2>
              {slide.subtitle && <p className="text-xl text-gray-400">{slide.subtitle}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {slide.content.sections?.map((section, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 md:p-8 rounded-2xl hover:bg-gray-800 transition-colors"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 + 0.3 }}
                >
                  <div className="bg-gray-900 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6 shadow-lg border border-gray-700">
                    {getIcon(section.icon)}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-100">{section.title}</h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">{section.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'media-text':
        return (
          <div className="flex flex-col md:flex-row items-center h-full px-6 md:px-16 gap-8 md:gap-16 max-w-7xl mx-auto w-full">
             <div className="flex-1 space-y-6 md:space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  {slide.title}
                </h2>
                {slide.subtitle && <p className="text-xl text-gray-400 italic">{slide.subtitle}</p>}
                <div className="space-y-4 md:space-y-6">
                  {slide.content.text?.map((t, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start text-lg md:text-2xl text-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 + 0.3 }}
                    >
                      <span className="text-orange-500 mr-4 font-bold flex-shrink-0">●</span>
                      <span>{t}</span>
                    </motion.div>
                  ))}
                  {/* Handle sections in media-text if present (e.g. for Framework diagram) */}
                  {slide.content.sections?.map((s, i) => (
                    <motion.div 
                      key={`sec-${i}`}
                      className="flex items-start gap-4 p-3 bg-gray-800/30 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      {s.icon && <div className="text-orange-400">{getIcon(s.icon)}</div>}
                      <div>
                        <h4 className="font-bold text-orange-200">{s.title}</h4>
                        <p className="text-gray-300 text-sm">{s.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
             </div>
             <div className="flex-1 w-full space-y-4">
                {slide.content.media?.map((m, i) => (
                   <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                   >
                     <MediaPlaceholder
                       type={m.type}
                       src={m.src}
                       ratio={m.ratio}
                       text={m.placeholderText}
                       caption={m.caption}
                       height="h-64 md:h-80"
                     />
                   </motion.div>
                ))}
             </div>
          </div>
        );
      
      case 'grid':
        return (
          <div className="flex flex-col h-full justify-center px-6 md:px-12 max-w-7xl mx-auto w-full pt-16 md:pt-0">
             <div className="mb-8 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                {slide.subtitle && <p className="text-lg md:text-xl text-orange-400">{slide.subtitle}</p>}
                {slide.content.text && <p className="mt-4 text-gray-300 max-w-3xl">{slide.content.text[0]}</p>}
             </div>
             
             {/* If sections (Breakthroughs) */}
             {slide.content.sections && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                 {slide.content.sections.map((s, i) => (
                   <motion.div 
                    key={i}
                    className="flex items-start gap-4 p-4 md:p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-orange-500/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                   >
                      <div className="p-3 bg-gray-800 rounded-lg">{getIcon(s.icon)}</div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{s.title}</h4>
                        <p className="text-gray-400 text-sm md:text-base">{s.description}</p>
                      </div>
                   </motion.div>
                 ))}
               </div>
             )}

             {/* If media (Failures) */}
             {slide.content.media && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {slide.content.media.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 + 0.3 }}
                    >
                      <MediaPlaceholder
                        type={m.type}
                        src={m.src}
                        ratio={m.ratio}
                        text={m.placeholderText}
                        caption={m.caption}
                        height="h-48"
                      />
                    </motion.div>
                  ))}
                </div>
             )}
          </div>
        );

      case 'list':
        return (
          <div className="flex flex-col md:flex-row items-center h-full px-6 md:px-12 max-w-7xl mx-auto w-full gap-8">
            <div className="flex-1 w-full order-2 md:order-1">
              <motion.div 
                className="bg-[#1e1e1e] p-4 md:p-6 rounded-xl font-mono text-xs md:text-sm text-green-400 overflow-x-auto border border-gray-700 shadow-2xl relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute top-3 right-3 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mb-4 flex items-center gap-2 text-gray-500 border-b border-gray-700 pb-2">
                  <CodeIcon size={16} /> reward_function.py
                </div>
                <pre>{slide.content.code}</pre>
              </motion.div>
            </div>
            <div className="flex-1 space-y-8 order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
              {slide.subtitle && <p className="text-xl text-orange-400">{slide.subtitle}</p>}
              <div className="space-y-6">
                {slide.content.sections?.map((s, i) => (
                  <motion.div 
                    key={i}
                    className="pl-6 border-l-2 border-orange-500"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 + 0.4 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-gray-400">{s.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'outro':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
             <motion.h2 
               className="text-4xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
             >
               {slide.title}
             </motion.h2>
             <div className="space-y-6 text-left">
               {slide.content.bullets?.map((b, i) => (
                 <motion.div 
                    key={i}
                    className="flex items-center gap-4 text-xl md:text-2xl text-gray-300 bg-gray-900/50 p-4 rounded-xl border border-white/5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 + 0.5 }}
                 >
                    <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                    {b}
                 </motion.div>
               ))}
             </div>
             <motion.div 
               className="mt-16 text-sm text-gray-600 font-mono"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.5 }}
             >
               Presentation Generated by Unitree AI Concept
             </motion.div>
          </div>
        );
      default:
        return <div>Slide Type Not Supported</div>;
    }
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden font-sans selection:bg-orange-500 selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-orange-600 to-yellow-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlideIndex + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            className="w-full h-full"
            initial={{ opacity: 0, filter: 'blur(10px)', x: 100 }}
            animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
            exit={{ opacity: 0, filter: 'blur(10px)', x: -100 }}
            transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
          >
            {renderSlideContent(currentSlide)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-50 bg-gray-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl">
        <button 
          onClick={goToPrev} 
          disabled={currentSlideIndex === 0}
          className={`p-2 rounded-full hover:bg-white/10 transition ${currentSlideIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
        >
          <ChevronLeft size={24} />
        </button>
        <span className="text-sm font-mono text-gray-400">
          {currentSlideIndex + 1} / {SLIDES.length}
        </span>
        <button 
          onClick={goToNext} 
          disabled={currentSlideIndex === SLIDES.length - 1}
          className={`p-2 rounded-full hover:bg-white/10 transition ${currentSlideIndex === SLIDES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

    </div>
  );
};

export default App;