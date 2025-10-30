<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\KandangController;
use App\Http\Controllers\PakanController;
use App\Http\Controllers\TelurController;
use App\Http\Controllers\PenjualanController;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');
// resource digunakan untuk membuat route CRUD secara otomatis
// ini akan membuat route seperti:
// GET /kandang -> index
// GET /kandang/create -> create
// POST /kandang -> store
// GET /kandang/{id} -> show
// GET /kandang/{id}/edit -> edit
// PUT/PATCH /kandang/{id} -> update
// DELETE /kandang/{id} -> destroy
Route::resource('kandang', KandangController::class);

Route::resource('pakan', PakanController::class);

Route::resource('telur' , TelurController::class);

Route::resource('penjualan', PenjualanController::class);
