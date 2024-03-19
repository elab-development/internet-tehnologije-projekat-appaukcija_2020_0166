<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Illuminate\Http\Request;

class UserItemController extends Controller
{
    public function index($user_id)
    {
       
        $items = Item::get()->where('user_id', $user_id);
        if (is_null($items)) {
            return response()->json('Data not found', 404);
        }
        return response()->json($items);
    }
}
