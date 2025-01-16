<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = \App\Models\Movie::class;
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3), // Random movie title
            'overview' => $this->faker->paragraph, // Random movie overview
            'poster_path' => $this->faker->imageUrl(300, 450, 'movies', true, 'Poster'), // Random poster URL
            'release_date' => $this->faker->date(), // Random release date
        ];
    }
}
