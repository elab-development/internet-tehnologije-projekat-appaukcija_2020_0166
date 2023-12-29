<?php

use App\Http\Controllers\BidController;
use App\Http\Controllers\UserItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuctionController;
use App\Http\Controllers\Authorization\ForgotPasswordController;
use App\Http\Controllers\Authorization\AuthController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::get('/items', [ItemController::class, 'index']);
// Route::get('/items/{id}', [ItemController::class, 'show']);



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/login', function () {
    return 'Please authenticate';
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });

    Route::resource('users', UserController::class);
    Route::get('/user/{id}/items', [UserItemController::class, 'index']);
    Route::get('/auctions/{id}', [AuctionController::class, 'show']);
    Route::get('/bids', [BidController::class, 'index']);
    Route::resource('item', ItemController::class)->only(['update', 'store', 'destroy']);
    Route::resource('items', ItemController::class);
    // API route za izlogovanje korisnika
    Route::post('/logout', [AuthController::class, 'logout']);
});
//API rute za resetovanje lozinke
Route::post('/forget-password', [ForgotPasswordController::class, 'forgotPassword']);
Route::post('/reset-password', [ForgotPasswordController::class, 'reset']);

