import styles from './Songbook.module.css';

const songs = [
  { id: 'A1', title: 'Sweet Dreams', artist: 'Eurythmics' },
  { id: 'A2', title: 'Take On Me', artist: 'a-ha' },
  { id: 'A3', title: 'Billie Jean', artist: 'Michael Jackson' },
  { id: 'B1', title: 'Girls Just Want to Have Fun', artist: 'Cyndi Lauper' },
  { id: 'B2', title: 'Beat It', artist: 'Michael Jackson' },
  { id: 'B3', title: 'Like a Virgin', artist: 'Madonna' },
  { id: 'C1', title: 'Purple Rain', artist: 'Prince' },
  { id: 'C2', title: 'Time After Time', artist: 'Cyndi Lauper' },
  { id: 'C3', title: 'Material Girl', artist: 'Madonna' },
];

const Songbook = () => {
  return (
    <div className={styles.songbook}>
      <div className={styles.header}>
        <h2>Song Selection</h2>
      </div>
      <div className={styles.songList}>
{/* Mapping through each song in the songs array and turning it into a div with the details inside, each div is given a unique key so React can keep track of it */}
        {songs.map((song) => (
          <div key={song.id} className={styles.songItem}>
            <div className={styles.songId}>{song.id}</div>
            <div className={styles.songInfo}>
              <span className={styles.songTitle}>{song.title}</span>
              <span className={styles.songArtist}>{song.artist}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songbook;
