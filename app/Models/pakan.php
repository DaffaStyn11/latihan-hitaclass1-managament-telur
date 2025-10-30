<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pakan extends Model
{
    protected $table = 'pakans';

    protected $fillable = [
        'nama_pakan',
        'jumlah_pakan',
        'harga_pakan',
        'satuan',
    ];
}
