<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUpdateTopicRequest;
use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{

    public function index()
    {
        $topics = Topic::all();
        return response()->json(['data' => $topics]);
    }


    public function store(StoreUpdateTopicRequest $request)
    {
        $topic = Topic::create($request->validated());
        return response()->json(['data' => $topic], 201);
    }

    public function show(Topic $topic)
    {
        return response()->json($topic);
    }


    public function update(StoreUpdateTopicRequest $request, Topic $topic)
    {
        $topic->update($request->validated());
        return response()->json($topic);
    }


    public function destroy(Topic $topic)
    {
        $topic->delete();
        return response()->noContent();
    }
}
