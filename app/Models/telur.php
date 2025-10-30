<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class telur extends Model
{
    protected $table = 'telurs';

    protected $fillable = [
        'jumlah_telur',
        'harga_telur',
    ];
}
