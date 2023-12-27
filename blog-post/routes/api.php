<?php

use App\Http\Controllers\BidController;
use App\Http\Controllers\UserItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuctionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('/items', [ItemController::class, 'index']);
// Route::get('/items/{id}', [ItemController::class, 'show']);
Route::get('/bids', [BidController::class, 'index']);
Route::get('/auctions/{id}', [AuctionController::class, 'show']);
Route::get('/user/{id}/items', [UserItemController::class, 'index']);
Route::resource('items', ItemController::class);
Route::resource('users', UserController::class);
