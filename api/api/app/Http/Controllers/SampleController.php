<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SampleController extends Controller
{
    public function sampleMethod(): \Illuminate\Http\JsonResponse
    {
        return response()->json(['message' => 'This is a sample endpoint']);
    }
}
