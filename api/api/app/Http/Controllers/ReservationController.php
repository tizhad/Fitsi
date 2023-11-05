<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Reservation::all();
    }

    public function store(Request $request)
    {
        \Laravel\Prompts\info($request);
        $reservation = Reservation::create($request->all());

        return response()->json($reservation, 201);
    }

    public function update(Request $request, Reservation $reservation)
    {
        $reservation->update($request->all());

        return response()->json($reservation, 200);
    }

    public function delete(Reservation $reservation)
    {
        $reservation->delete();

        return response()->json(null, 204);
    }

}
