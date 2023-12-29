<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUpdateAuthorRequest;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::all();
        return response()->json(['data' => $authors]);
    }


    public function store(StoreUpdateAuthorRequest $request)
    {
        $author = Author::create($request->validated());
        return response()->json(['data' => $author], 201);
    }

    public function show(Author $author)
    {
        return response()->json($author);
    }


    public function update(StoreUpdateAuthorRequest $request, Author $author)
    {
        $author->update($request->validated());
        return response()->json($author);
    }


    public function destroy(Author $author)
    {
        $author->delete();
        return response()->noContent();
    }

}
