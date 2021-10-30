const LibrarySong = ({
  audioRef,
  song,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
}) => {
  const { cover, name, artist } = song;

  const songSelectHandler = async () => {
    await setCurrentSong(song);
    const newSongs = songs.map((s) => {
      if (song.id === s.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}>
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
