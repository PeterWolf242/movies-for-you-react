import { useState } from "react";
import moviesData from "../../data";
import "./Home.css";
import Header from "../../components/Header/Header";

export default function Home() {
	const [movies, setMovies] = useState(moviesData);

	const handleSort = (criteria: string) => {
		let sortedMovies = [...movies];

		switch (criteria) {
			case "asc":
				sortedMovies.sort((a, b) => Number(a.year) - Number(b.year));
				break;
			case "desc":
				sortedMovies.sort((a, b) => Number(b.year) - Number(a.year));
				break;
			case "rate":
				sortedMovies.sort((a, b) => Number(b.rate) - Number(a.rate));
				break;
			case "a-z":
				sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case "z-a":
				sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
				break;
			default:
				break;
		}

		setMovies(sortedMovies);
	};

	return (
		<>
			<Header onSort={handleSort} />
			<div className="movie-container">
				{movies.map((item) => (
					<article key={item.title} className="movieBox">
						<h3>{item.title}</h3>
						<div className="movie-content">
							<h4><span>Release Date:</span> {item.year}</h4>
							<h4><span>Director:</span> {item.director}</h4>
							<h5>Genres:</h5>
							<div className="genre-text">
								{item.genre.map((genreItem) => (
									<p key={genreItem}>{genreItem}</p>
								))}
							</div>
							<p><span>Playtime:</span> {item.duration}</p>
							<p><span>Rating:</span> {item.rate}</p>
						</div>
					</article>
				))}
			</div>
		</>
	);
}
