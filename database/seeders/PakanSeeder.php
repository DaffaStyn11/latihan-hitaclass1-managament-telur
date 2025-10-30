<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\pakan;
class PakanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        pakan::create([
            'nama_pakan' => 'Jagung',
            'jumlah_pakan' => 500,
            'harga_pakan' => 20000,
            'satuan' => 'kg',
        ]);
        pakan::create([
            'nama_pakan' => 'Dedak',
            'jumlah_pakan' => 300,
            'harga_pakan' => 15000,
            'satuan' => 'ton',
        ]);
    }
}
