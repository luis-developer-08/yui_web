<?php

use App\Http\Controllers\TableGeneratorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware(['auth', 'web', 'role:admin'])->group(function () {
    Route::post('/generate-table', [TableGeneratorController::class, 'generate']);
});
