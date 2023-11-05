<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RestaurantsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('restaurants')->insert([
            [
                'name' => 'Sample Restaurant',
                'number_of_tables' => 10,
                'location' => 'Rijn 11',
                'status' => 0
            ],
            [
                'name' => 'Nice Restaurant',
                'number_of_tables' => 20,
                'location' => 'Delft 11',
                'status' => 1
            ]
        ]);
    }
}
