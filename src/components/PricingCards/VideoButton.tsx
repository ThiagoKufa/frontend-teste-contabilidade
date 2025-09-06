import { motion } from 'framer-motion';
import type { VideoButtonProps } from './types';

export const VideoButton = ({ videoVariants }: VideoButtonProps) => {
  return (
    <motion.button 
      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300 mx-auto mb-12 group cursor-pointer"
      variants={videoVariants}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)" }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative">
        <motion.img 
          src="/avatar.png" 
          alt="Avatar" 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200">
           <svg 
             className="w-4 h-4 text-white" 
             fill="currentColor" 
             viewBox="0 0 24 24"
           >
             <path d="M8 5v14l11-7z"/>
           </svg>
         </div>
      </div>
      <span
        className="text-base font-medium text-gray-800"
      >
        Entenda os planos
      </span>
    </motion.button>
  );
};