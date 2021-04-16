import React, { useEffect, useContext } from 'react';
import { MainContext } from '../../context/mainContext';

const Player = () => {
  const { audioPlayerStatus, track } = useContext(MainContext);

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
        <source src={track.source} />
        Your browser doesn't support <code>audio</code>.
      </audio>
    </div>
  );
};

export default Player;
