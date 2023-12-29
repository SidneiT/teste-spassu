<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\TopicController;
use Illuminate\Support\Facades\Route;


Route::apiResource('/books', BookController::class);
Route::apiResource('/topics', TopicController::class);
Route::apiResource('/authors', AuthorController::class);
