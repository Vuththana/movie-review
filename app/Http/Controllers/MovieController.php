<?php

// MovieController.php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function index()
    {
        // Fetch the movies
        $popularMovies = $this->fetchMovies('https://api.themoviedb.org/3/movie/popular');
        $nowPlayingMovies = $this->fetchMovies('https://api.themoviedb.org/3/movie/now_playing');
        $genres = $this->fetchGenres();

        // Pass the data to the Inertia view
        return Inertia::render('Movies', [  // Make sure the Inertia view name matches the React component name
            'movies' => $popularMovies, // Or use $nowPlayingMovies or both
            'genres' => $genres,
        ]);
    }

    private function fetchMovies($url)
    {
        $apiKey = config('services.movie_api_key');
        $urlWithKey = $url . '?api_key=' . $apiKey;
    
        $response = Http::get($urlWithKey)->json();
    
        // Debug the response to ensure data is being fetched correctly
    
        return $response['results'] ?? [];
    }
    

    private function fetchGenres()
    {
        $response = Http::withToken(config('services.movie_api_key'))
            ->get('https://api.themoviedb.org/3/genre/movie/list')
            ->json();
        return $response['genres'] ?? [];
    }
}

