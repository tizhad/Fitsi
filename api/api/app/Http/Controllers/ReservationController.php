<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Services\ReservationStatusService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index(): Collection
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

    public function delete(int $id)
    {
        $reservation = Reservation::find($id);

        if ($reservation) {

            (new Reservation)->delete();
            return response()->json(['message' => 'Reservation deleted'], 200);
        } else {
            return response()->json(['message' => 'Reservation not found'], 404);
        }
    }

    public function findOne(int $id)
    {
        $reservation = Reservation::find($id);

        if ($reservation) {

            return $reservation;
        } else {
            return response()->json(['message' => 'Reservation not found'], 404);
        }

    }

    public function reservationCheck(int $restaurantId, ReservationStatusService $reservationStatusService): \Illuminate\Http\JsonResponse
    {
        $response = $reservationStatusService->reservationCheck($restaurantId);
        \Laravel\Prompts\info($response);
        return $response;
    }


}
