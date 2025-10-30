<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kandang extends Model
{
    protected $table = 'kandangs';

    protected $fillable = [
        'nama_kandang',
        'jumlah_ayam',
        'lokasi',
    ];
}
