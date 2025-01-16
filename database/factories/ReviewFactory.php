<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = \App\Models\Review::class;
    public function definition(): array
    {
        return [
            'movie_id' => Movie::factory(), // Create a movie and associate the review with it
            'review_text' => $this->faker->paragraph(3), // Random review text
            'rating' => $this->faker->numberBetween(1, 10), // Random rating between 1 and 10
        ];
    }
}
