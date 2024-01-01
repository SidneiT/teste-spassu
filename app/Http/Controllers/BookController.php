<?php

namespace App\Http\Controllers;

use App\Exceptions\BookCreateUpdateException;
use App\Exceptions\BookNotFoundException;
use App\Http\Requests\StoreUpdateBookRequest;
use Illuminate\Support\Facades\DB;
use App\Models\Author;
use App\Models\Book;
use App\Models\Topic;
use Exception;

class BookController extends Controller
{

    public function index()
    {
        $books = Book::with(['authors', 'topics'])->get();
        return response()->json(['data' => $books]);
    }


    public function store(StoreUpdateBookRequest $request)
    {

        try {
            DB::beginTransaction();
            $book = Book::create($request->validated());

            if ($request->authors) {
                $book->authors()->saveMany(Author::find($request->authors));
            }

            if ($request->topics) {
                $book->topics()->saveMany(Topic::find($request->topics));
            }
            DB::commit();

        } catch (Exception $e) {

            DB::rollBack();
            throw new BookCreateUpdateException;
        }


        return response()->json($book, 201);
    }


    public function show(string $id)
    {
        try {
            $book = Book::with(['authors', 'topics'])->findOrFail($id);
        } catch (Exception $e) {
            throw new BookNotFoundException;
        }

        return response()->json($book);
    }


    public function update(StoreUpdateBookRequest $request, Book $book)
    {

        try {
            DB::beginTransaction();

            $book->update($request->validated());

            if ($request->authors) {
                $book->authors()->sync(Author::find($request->authors));
            }

            if ($request->topics) {
                $book->topics()->sync(Topic::find($request->topics));
            }
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw new BookCreateUpdateException;
        }

        return response()->json($book);
    }


    public function destroy(Book $book)
    {
        $book->delete();
        return response()->noContent();
    }
}
