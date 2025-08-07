import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Eye, Volume2, VolumeX, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface PalmReadingProps {
    reading: object | Record<string, string>
}

const PalmReading: React.FC<PalmReadingProps> = ({ reading }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const router = useRouter()
    const handleCopyReading = async () => {
        try {
            const text =
                typeof reading === 'string'
                    ? reading
                    : Object.entries(reading)
                          .map(
                              ([key, value]) =>
                                  `${key.toUpperCase()}:\n${value}`
                          )
                          .join('\n\n')

            await navigator.clipboard.writeText(text)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    const handleTextToSpeech = () => {
        const text =
            typeof reading === 'string'
                ? reading
                : Object.values(reading).join('. ')

        if (isPlaying) {
            speechSynthesis.cancel()
            setIsPlaying(false)
        } else {
            const utterance = new SpeechSynthesisUtterance(text)

            // Auto-detect language from text (basic check)
            const isHindi = /[\u0900-\u097F]/.test(text) // Hindi Unicode block
            console.log('Detected language:', isHindi ? 'Hindi' : 'English')

            const desiredLang = isHindi ? 'hi-IN' : 'en-US'

            // Get the best matching voice
            const voices = speechSynthesis.getVoices()
            const selectedVoice = voices.find(
                (voice) => voice.lang === desiredLang
            )

            if (selectedVoice) {
                utterance.voice = selectedVoice
            }

            // Optional: Set rate/pitch/volume based on language
            utterance.rate = isHindi ? 0.85 : 0.9
            utterance.pitch = 1
            utterance.volume = 0.9

            utterance.onstart = () => setIsPlaying(true)
            utterance.onend = () => setIsPlaying(false)
            utterance.onerror = () => setIsPlaying(false)

            speechSynthesis.speak(utterance)
        }
    }

    if (!reading) return null

    const sectionTitles: Record<string, string> = {
        love: '❤️ Love Life',
        career: '💼 Career Path',
        health: '🌱 Health Tendencies',
        future: '🔮 Overall Future',
        summary: '✨ Summary',
    }

    function isStructuredReading(
        reading: any
    ): reading is Record<string, string> {
        return (
            typeof reading === 'object' &&
            reading !== null &&
            ['love', 'career', 'health', 'future', 'summary'].some(
                (k) => k in reading
            )
        )
    }



    const handlereportredirect = async () => {
      if (!reading) return;
    
      const res = await fetch('/api/set-reading-cookies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          love: reading.love || '',
          career: reading.career || '',
          health: reading.health || '',
          future: reading.future || '',
        }),
      });
    
      if (res.ok) {
        router.push('/report');
      }
    };




    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
            className="mt-8"
        >
            {/* Header */}
            <motion.div
                className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-3xl p-6 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                            <Eye className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">
                                Your Mystical Reading
                            </h2>
                            <p className="text-purple-100">
                                Decoded from the lines of your palm
                            </p>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                        <Button
                            onClick={handleTextToSpeech}
                            size="sm"
                            variant="ghost"
                            className="text-white hover:bg-white/10 rounded-xl"
                        >
                            {isPlaying ? (
                                <VolumeX className="w-4 h-4" />
                            ) : (
                                <Volume2 className="w-4 h-4" />
                            )}
                        </Button>

                        <Button
                            onClick={handleCopyReading}
                            size="sm"
                            variant="ghost"
                            className="text-white hover:bg-white/10 rounded-xl"
                        >
                            {isCopied ? (
                                <Check className="w-4 h-4" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                className="bg-white/70 backdrop-blur-sm rounded-b-3xl border border-purple-200/50 shadow-xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {/* Decorative elements */}
                <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"></div>

                    {/* Floating sparkles */}
                    <div className="absolute top-4 left-6">
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <Sparkles className="w-4 h-4 text-purple-400" />
                        </motion.div>
                    </div>

                    <div className="absolute top-6 right-8">
                        <motion.div
                            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: 1,
                            }}
                        >
                            <Sparkles className="w-3 h-3 text-indigo-400" />
                        </motion.div>
                    </div>
                </div>

                {/* Reading text */}
                <div className="p-8 pt-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="prose prose-lg max-w-none"
                    >
                        <div className="text-gray-800 leading-relaxed space-y-4">
                            {isStructuredReading(reading)
                                ? Object.entries(sectionTitles).map(
                                      ([key, title]) =>
                                          reading[key] ? (
                                              <motion.div
                                                  key={key}
                                                  initial={{
                                                      opacity: 0,
                                                      x: -20,
                                                  }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  transition={{
                                                      duration: 0.5,
                                                      delay: 0.6,
                                                  }}
                                              >
                                                  <h3 className="font-bold text-purple-700 mb-1">
                                                      {title}
                                                  </h3>
                                                  <p className="text-lg leading-relaxed pl-2">
                                                      {reading[key]?.length > 40
                                                          ? `${reading[
                                                                key
                                                            ].slice(0, 400)}...`
                                                          : reading[key]}
                                                  </p>
                                              </motion.div>
                                          ) : null
                                  )
                                : (typeof reading === 'string' ? reading : '')
                                      .split('\n')
                                      .map((paragraph, index) => (
                                          <motion.p
                                              key={index}
                                              initial={{ opacity: 0, x: -20 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{
                                                  duration: 0.5,
                                                  delay: 0.6 + index * 0.1,
                                              }}
                                              className="text-lg leading-relaxed"
                                          >
                                              {paragraph}
                                          </motion.p>
                                      ))}
                        </div>
                    </motion.div>

                    <button onClick={handlereportredirect}>Click</button>

                    {/* Bottom decoration */}
                    <motion.div
                        className="mt-8 pt-6 border-t border-purple-200/50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <div className="flex items-center justify-center gap-2 text-purple-600">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">
                                Powered by Mystical AI
                            </span>
                            <Sparkles className="w-4 h-4" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Copy feedback */}
            {isCopied && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        <Check className="w-4 h-4" />
                        Reading copied to clipboard!
                    </div>
                </motion.div>
            )}
        </motion.div>
    )
}

export default PalmReading
