<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{

    public function index()
    {
        $books = Book::all();
        return response()->json(['data' => $books]);
    }


    public function store(Request $request)
    {
        $book = Book::create($request->all());
        return response()->json(['data' => $book], 201);
    }


    public function show(Book $book)
    {
        return response()->json($book);
    }


    public function update(Request $request, Book $book)
    {
        $book->update($request->all());
        return response()->json($book);
    }


    public function destroy(Book $book)
    {
        $book->delete();
        return response()->noContent();
    }
}
