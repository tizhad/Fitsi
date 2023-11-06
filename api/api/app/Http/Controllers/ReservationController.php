<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Reservation::all();
    }

    public function store(Request $request)
    {
        $defaultTableNumber = 1;
        $tableNumber = $request->has('table_number') ? $request->input('table_number') : $defaultTableNumber;
        $reservationData = [
            'people' => $request->input('people'),
            'restaurant_id' => $request->input('restaurant'),
            'table_number' => $tableNumber,
            'date' => $request->input('date'),
            'time' => $request->input('time'),
        ];


        $reservation = Reservation::create($reservationData);

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
