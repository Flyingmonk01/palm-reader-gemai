import React, { useEffect, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface Reading {
  ipfsHash: string;
  timestamp: string;
  reading: object | string;
}

const PastReadingsGallery: React.FC = () => {
  const [pastReadings, setPastReadings] = useState<Reading[]>([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const rawReadings = localStorage.getItem("pastReadings");
    if (rawReadings) {
      const allReadings = JSON.parse(rawReadings);
      const completeReadings = allReadings.filter(
        (r: Reading) => r.timestamp && r.reading && r.ipfsHash
      );
      setPastReadings(completeReadings);
    }
  }, []);

  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  }, []);

  const handleTextToSpeech = (reading: object | string, readingId: string) => {
    const text =
      typeof reading === "string"
        ? reading
        : Object.values(reading).join(". ");

    if (isPlaying && currentlyPlaying === readingId) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentlyPlaying(null);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);

      // Auto-detect language from text (basic check)
      const isHindi = /[\u0900-\u097F]/.test(text);
      const desiredLang = isHindi ? "hi-IN" : "en-US";

      // Get the best matching voice
      const voices = speechSynthesis.getVoices();
      const selectedVoice = voices.find(
        (voice) => voice.lang === desiredLang
      );
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.rate = isHindi ? 0.85 : 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.9;

      utterance.onstart = () => {
        setIsPlaying(true);
        setCurrentlyPlaying(readingId);
      };
      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentlyPlaying(null);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
        setCurrentlyPlaying(null);
      };

      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Card className="w-full mt-8 bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300">
      <CardContent className="p-6">
        <ScrollArea className="h-[600px] pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastReadings.map((reading, index) => (
              <Dialog key={reading.ipfsHash}>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow bg-white">
                      <CardContent className="p-0">
                        <img
                          src={`https://gateway.pinata.cloud/ipfs/${reading.ipfsHash}`}
                          alt={`Palm reading ${index + 1}`}
                          className="w-full h-48 object-contain"
                        />
                        <div className="p-4">
                          <p className="text-sm text-orange-600 mb-2 font-serif">
                            {formatDate(reading.timestamp)}
                          </p>
                          <div className="space-y-1">
                            {typeof reading.reading === "object" && reading.reading !== null ? (
                              Object.entries(reading.reading).map(([key, value]) => (
                                <div key={key}>
                                  <span className="font-semibold capitalize">
                                    {key}:{" "}
                                  </span>
                                  <span>{value as string}</span>
                                </div>
                              ))
                            ) : (
                              <span>{String(reading.reading)}</span>
                            )}
                          </div>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTextToSpeech(reading.reading, reading.ipfsHash);
                            }}
                            className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white"
                          >
                            {isPlaying && currentlyPlaying === reading.ipfsHash ? (
                              <Pause className="mr-2" />
                            ) : (
                              <Play className="mr-2" />
                            )}
                            {isPlaying && currentlyPlaying === reading.ipfsHash
                              ? "Pause"
                              : "Play"}{" "}
                            Reading
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-7xl h-screen overflow-y-auto  bg-gradient-to-br from-yellow-50 to-orange-50">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-orange-800 font-serif">
                      Palm Reading {index + 1}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                      src={`https://gateway.pinata.cloud/ipfs/${reading.ipfsHash}`}
                      alt={`Palm reading ${index + 1}`}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                    <div >
                      <h3 className="text-lg font-semibold mb-2 text-orange-900 font-serif">
                        Your Reading
                      </h3>
                      <div className="space-y-1">
                        {typeof reading.reading === "object" && reading.reading !== null ? (
                          Object.entries(reading.reading).map(([key, value]) => (
                            <div key={key}>
                              <span className="font-semibold capitalize">
                                {key}:{" "}
                              </span>
                              <span>{value as string}</span>
                            </div>
                          ))
                        ) : (
                          <span>{String(reading.reading)}</span>
                        )}
                      </div>
                      <p className="text-xs text-orange-600 font-serif">
                        Date: {formatDate(reading.timestamp)}
                      </p>
                      <Button
                        onClick={() => handleTextToSpeech(reading.reading, reading.ipfsHash)}
                        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white"
                      >
                        {isPlaying && currentlyPlaying === reading.ipfsHash ? (
                          <Pause className="mr-2" />
                        ) : (
                          <Play className="mr-2" />
                        )}
                        {isPlaying && currentlyPlaying === reading.ipfsHash
                          ? "Pause"
                          : "Play"}{" "}
                        Reading
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PastReadingsGallery;