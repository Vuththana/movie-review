<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $movieDetails['title'] }}</title>
</head>
<body>
    <h1>{{ $movieDetails['title'] }}</h1>
    <p><strong>Release Date:</strong> {{ $movieDetails['release_date'] }}</p>
    <p><strong>Overview:</strong> {{ $movieDetails['overview'] }}</p>
    <img src="https://image.tmdb.org/t/p/w500{{ $movieDetails['poster_path'] }}" alt="{{ $movieDetails['title'] }} Poster">
</body>
</html>
