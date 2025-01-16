import React, { useState, useEffect } from 'react';
import { Movie } from '../types/movie';
import Navbar from '@/Components/Navbar/Navbar';
import CategoriesFilter from '@/Components/Filters/CategoriesFilter';
import Footer from '@/Components/Footer/Footer';

interface HomeProps {
    movies: Movie[];  // Movies passed from controller
    genres: { id: number, name: string }[];  // Genre data from the controller
}

const Movies: React.FC<HomeProps> = ({ movies, genres }) => {
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const filterMoviesByCategory = (category: string) => {
        if (category === '') {
            // Show all movies when "All" is selected
            setFilteredMovies(movies);
            return;
        }

        const genreId = getGenreId(category);
        if (genreId) {
            // Filter movies that include the selected genre ID
            const filtered = movies.filter((movie) => movie.genre_ids?.includes(genreId));
            setFilteredMovies(filtered);
        }
    };

    const getGenreId = (category: string): number | undefined => {
        const genre = genres.find((g) => g.name === category);
        return genre?.id;
    };

    useEffect(() => {
        // Initialize filteredMovies with the full list of movies on initial load
        setFilteredMovies(movies);
    }, [movies]);  // This ensures that filteredMovies is always set to the initial movies data when it changes

    return (
        <div>
            <Navbar />
            <div className="flex flex-col lg:flex-row gap-6 mx-auto w-[1300px]">
                {/* Sidebar Filters */}
                <div className="relative mt-5">
                    <button
                        onClick={toggleDropdown}
                        className="w-[200px] text-left px-4 py-2 border bg-white rounded-lg shadow-md hover:bg-gray-100 focus:outline-none"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold">Filters</span>
                            <svg
                                className={`w-5 h-5 transform transition-transform ${
                                    isOpen ? 'rotate-180' : ''
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </button>

                    {isOpen && (
                        <aside className="absolute w-[260px] border bg-white p-4 rounded-lg shadow-md mt-2 z-10">
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">Genre:</h2>
                                <CategoriesFilter
                                    categories={genres.map((genre) => genre.name)}  // Pass genre names here
                                    onCategorySelect={filterMoviesByCategory}
                                />
                            </div>
                        </aside>
                    )}
                </div>

                {/* Movies Grid */}
                <main className="flex-1 mt-14">
                    <div className="grid sm:grid-cols-4 lg:grid-cols- xl:grid-cols-5 gap-4 space-x-2 px-6">
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((movie) => {
                            // Format the release_date
                            const formattedDate = new Date(movie.release_date).toLocaleDateString('en-US', {
                                day: '2-digit',
                                month: 'short', // "Jan", "Feb", etc. Use 'long' for full month names
                                year: 'numeric',
                            });

                            return (
                                <div
                                    key={movie.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden"
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-full"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-[15px] font-semibold">{movie.title}</h2>
                                        <p className="text-sm text-gray-500">{formattedDate}</p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-gray-500">No movies found for this category.</p>
                    )}
                    </div>
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Movies;
