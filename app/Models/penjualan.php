<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penjualan extends Model
{
    protected $table = 'penjualans';

    protected $fillable = [
        'jumlah_telur',
        'harga_satuan',
        'total_harga',
    ];
}
