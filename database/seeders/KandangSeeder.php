<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\kandang;

class KandangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        kandang::create([
            'nama_kandang' => 'Belakang Rumah',
            'jumlah_ayam' => 150,
            'lokasi' => 'Kelurahan Banjarejo',
        ]);
        kandang::create([
            'nama_kandang' => 'Depan Rumah',
            'jumlah_ayam' => 200,
            'lokasi' => 'Kelurahan Sukorejo',
        ]);
    }
}
