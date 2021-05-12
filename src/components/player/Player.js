import React, { useEffect, useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import AudioMP3 from '../../audioPlayer/audio1.mp3';
import AudioOGG from '../../audioPlayer/audio1.ogg';

const Player = () => {
  const { audioPlayerStatus } = useContext(MainContext);

  useEffect(() => {
    const audio = document.getElementById('audio');
    audio.volume = 0.15;
    const togglePlay = () => {
      if (audioPlayerStatus) {
        audio.play();
      } else {
        audio.pause();
      }
    };
    togglePlay();
  }, [audioPlayerStatus]);
  return (
    <div>
      <audio id='audio' loop>
        <source src={AudioMP3}  type="audio/mpeg"/>
        <source src={AudioOGG} type="audio/ogg"/>
        Your browser doesn't support <code>audio</code>.
      </audio>
    </div>
  );
};

export default Player;
