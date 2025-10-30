<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Penjualan;

class PenjualanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Penjualan::create([
            'jumlah_telur' => 100,
            'harga_satuan' => 2000.00,
            'total_harga' => 200000.00,
        ]);

        Penjualan::create([
            'jumlah_telur' => 150,
            'harga_satuan' => 1800.00,
            'total_harga' => 270000.00,
        ]);

        Penjualan::create([
            'jumlah_telur' => 200,
            'harga_satuan' => 1900.00,
            'total_harga' => 380000.00,
        ]);
    }
}
