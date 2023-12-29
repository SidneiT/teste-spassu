<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUpdateBookRequest;
use App\Models\Author;
use App\Models\Book;
use App\Models\Topic;

class BookController extends Controller
{

    public function index()
    {
        $books = Book::with(['authors', 'topics'])->get();
        return response()->json(['data' => $books]);
    }


    public function store(StoreUpdateBookRequest $request)
    {
        $book = Book::create($request->validated());

        if ($request->author) {
            $author = Author::firstOrCreate(['name' => $request->author]);
            $book->authors()->save($author);
        }

        if ($request->topic) {
            $topic = Topic::firstOrCreate(['description' => $request->topic]);
            $book->topics()->save($topic);
        }

        return response()->json($book, 201);
    }


    public function show(string $id)
    {
        $book = Book::with(['authors', 'topics'])->find($id);
        return response()->json($book);
    }


    public function update(StoreUpdateBookRequest $request, Book $book)
    {
        $book->update($request->validated());

        if ($request->authors) {
            $book->authors()->saveMany(Author::find($request->authors));
        }

        if ($request->topics) {
            $book->topics()->saveMany(Topic::find($request->topics));
        }

        return response()->json($book);
    }


    public function destroy(Book $book)
    {
        $book->delete();
        return response()->noContent();
    }
}
