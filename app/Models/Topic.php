<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Topic extends Model
{
    use HasFactory;

    protected $fillable = ['description'];

    public function books(): BelongsToMany
    {
        return $this->belongsToMany(Book::class, 'book_topic');
    }
}
