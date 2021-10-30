import LibrarySong from "./LibrarySong";

const Library = ({
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  libraryStatus,
}) => {
  const renderedSongs = songs.map((song) => {
    return (
      <LibrarySong
        audioRef={audioRef}
        key={song.id}
        song={song}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
    );
  });
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">{renderedSongs}</div>
    </div>
  );
};

export default Library;
