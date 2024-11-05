import { motion } from 'framer-motion';

export default function BlogImage({ 
  src, 
  alt, 
  caption = null,
  priority = false 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-12 relative"
    >
      <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-800">
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <p className="mt-3 text-sm text-gray-400 text-center">
          {caption}
        </p>
      )}
    </motion.div>
  );
} 