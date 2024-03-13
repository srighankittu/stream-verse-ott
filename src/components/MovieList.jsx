import MovieCard from "./MovieCard";

function MovieList({ title, MoviesList }) {
  return (
    <div className="px-6 ">
      <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {MoviesList?.map((movie) => (
            <MovieCard
              key={movie.id}
              imageID={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
