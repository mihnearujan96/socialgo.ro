import { motion, AnimatePresence } from 'framer-motion'

interface PageLoaderProps {
  visible: boolean
}

export function PageLoader({ visible }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          aria-hidden={!visible}
        >
          <motion.img
            src="/brand/logo-primary.png"
            alt="SocialGo"
            className="w-[220px] sm:w-[280px]"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.45 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
