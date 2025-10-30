<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class kandang extends Model
{
    protected $table = 'kandangs';

    protected $fillable = [
        'nama_kandang',
        'jumlah_ayam',
        'lokasi',
    ];
}
