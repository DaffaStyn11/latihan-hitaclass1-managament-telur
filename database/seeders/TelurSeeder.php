<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\telur;
class TelurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        telur::create([
            'jumlah_telur' => 1000,
            'harga_telur' => 2000,
        ]);
        telur::create([
            'jumlah_telur' => 2000,
            'harga_telur' => 2200,
        ]);
    }
}
