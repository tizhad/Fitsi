<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['cors'])->group(function () {
    Route::post('/reservations', [\App\Http\Controllers\ReservationController::class, 'store']);
    Route::get('/reservations', [\App\Http\Controllers\ReservationController::class, 'index']);
    Route::get('/reservations/{id}', [\App\Http\Controllers\ReservationController::class, 'findOne']);
    Route::put('/reservations/{id}', [\App\Http\Controllers\ReservationController::class, 'update']);
    Route::delete('/reservations/{id}', [\App\Http\Controllers\ReservationController::class, 'delete']);
    Route::get('/reservations/{id}', [\App\Http\Controllers\ReservationController::class, 'reservationCheck']);

    Route::post('/restaurants', [\App\Http\Controllers\RestaurantController::class, 'store']);
    Route::get('/restaurants', [\App\Http\Controllers\RestaurantController::class, 'index']);
    Route::get('/restaurants/{id}', [\App\Http\Controllers\RestaurantController::class, 'findOne']);

    Route::put('/restaurants/{id}', [\App\Http\Controllers\RestaurantController::class, 'update']);
    Route::delete('/restaurants/{id}', [\App\Http\Controllers\RestaurantController::class, 'delete']);
});

