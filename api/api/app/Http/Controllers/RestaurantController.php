<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Restaurant::all();
    }

    public function store(Request $request)
    {
        $restaurant = Restaurant::create($request->all());

        return response()->json($restaurant, 201);
    }
    public function findOne(int $id)
    {
        $restaurant = Restaurant::find($id);

        if ($restaurant) {
            return $restaurant;
        } else {
            return response()->json(['message' => 'Restaurant not found'], 404);
        }

    }

    public function update(Request $request, Restaurant $restaurant)
    {
        $restaurant->update($request->all());

        return response()->json($restaurant, 200);
    }

    public function delete(Restaurant $restaurant)
    {
        $restaurant->delete();

        return response()->json(null, 204);
    }

}
