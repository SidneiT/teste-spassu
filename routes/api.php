<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\TopicController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use PharIo\Manifest\AuthorCollection;


Route::apiResource('/books', BookController::class);
Route::apiResource('/topics', TopicController::class);
Route::apiResource('/authors', AuthorCollection::class);
