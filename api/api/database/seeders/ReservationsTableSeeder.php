<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReservationsTableSeeder extends Seeder

{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('reservations')->insert([
            [
                'restaurant_id' => 1,
                'table_number' => 1,
                'date' => '2023-12-01',
                'time' => '18:00:00',
                'people' => 4,
            ],
            [
                'restaurant_id' => 1,
                'table_number' => 2,
                'date' => '2023-12-02',
                'time' => '19:30:00',
                'people' => 3,
            ],
            [
                'restaurant_id' => 2,
                'table_number' => 3,
                'date' => '2023-12-03',
                'time' => '20:00:00',
                'people' => 6,
            ],
            [
                'restaurant_id' => 2,
                'table_number' => 1,
                'date' => '2023-12-04',
                'time' => '17:45:00',
                'people' => 2,
            ],
        ]);
    }
}
