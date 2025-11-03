<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KandangController;
use App\Http\Controllers\PakanController;

Route::apiResource('kandang', KandangController::class);

