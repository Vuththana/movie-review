<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = ['movie_id', 'review_text', 'rating'];

    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }
}
