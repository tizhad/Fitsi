<?php

namespace app\Services;

use App\Models\Reservation;
use App\Models\Restaurant;

class ReservationStatusService
{
    public function reservationCheck(int $restaurantId): \Illuminate\Http\JsonResponse
    {
        $result = Reservation::where('restaurant_id', $restaurantId)->get();
        $people = 0;
        foreach ($result as $r) {
            $people += $r['people'];
        }

        $restaurant = Restaurant::find($restaurantId);
        if ($people < $restaurant['number_of_tables']) {
            $remainingPlace = $restaurant['number_of_tables'] - $people;
            return response()->json($remainingPlace, 200);

        } else if ($people > $restaurant['number_of_tables']) {
            return response()->json(['message' => 'Sorry this restaurant is full!'], 200);
        } else {
            return response()->json(['message' => 'Something went wrong!'], 200);
        }
    }
}
