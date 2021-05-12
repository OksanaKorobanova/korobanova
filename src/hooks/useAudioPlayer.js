import { useState, useRef, useEffect } from 'react';


export function useAudioPlayer(audioFile, volume = 1) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(audioFile));
  audioRef.current.volume = volume;

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // const handleChangePlayer = () => {
  //   if (isPlaying) {
  //     setIsPlaying(false);
  //     audioRef.current.pause();
      
  //   } else {
  //     setIsPlaying(true);
  //     audioRef.current.play();
  //   }
  // }
  const handleChangePlayer = () => setIsPlaying((prevState) => !prevState);

  return {
    isPlaying,
    handleChangePlayer,
  };
}
