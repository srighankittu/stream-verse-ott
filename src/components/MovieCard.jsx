import { IMAGE_URL } from "../utils/conf";

function MovieCard({ imageID, title }) {
  return (
    <div className="w-48 pr-4">
      <img alt={title} src={IMAGE_URL + imageID}></img>
    </div>
  );
}

export default MovieCard;
