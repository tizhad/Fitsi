<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//reservations
Route::post('/reservations', [\App\Http\Controllers\ReservationController::class, 'store']);
Route::get('/reservations', [\App\Http\Controllers\ReservationController::class, 'index']);
Route::put('reservations/{id}', 'ReservationController@update');
Route::delete('reservations/{id}', 'ReservationController@delete');

//restaurants
Route::post('/restaurants', [\App\Http\Controllers\RestaurantController::class, 'store']);
Route::get('/restaurants', [\App\Http\Controllers\ReservationController::class, 'index']);
Route::get('/restaurants/{id}', [\App\Http\Controllers\ReservationController::class, 'update']);
Route::get('/restaurants/{id}', [\App\Http\Controllers\ReservationController::class, 'delete']);
