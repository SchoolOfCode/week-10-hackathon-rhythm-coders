export default function Catalogue({ songs, currentlyPlaying }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 border-2 border-amber-500">
      <h2 className="text-3xl font-bold mb-6 text-amber-500 text-center font-serif">
        Music Catalogue
      </h2>
      <div className="bg-gray-800 p-4 rounded">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-amber-500">
              <th className="text-left p-2 text-amber-400">Code</th>
              <th className="text-left p-2 text-amber-400">Title</th>
              <th className="text-left p-2 text-amber-400">Artist</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr
                key={song.id}
                className={`border-b border-gray-700 ${
                  currentlyPlaying === song.id ? "bg-amber-500/10" : ""
                }`}
              >
                <td className="p-2 font-mono text-amber-300">{song.id}</td>
                <td className="p-2 text-amber-100">{song.title}</td>
                <td className="p-2 text-amber-200">{song.artist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
