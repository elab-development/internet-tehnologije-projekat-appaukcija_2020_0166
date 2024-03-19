<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Illuminate\Http\Request;

class UserItemController extends Controller
{
    public function index($user_id)
    {
        $items = Item::where('user_id', $user_id)->get();
    
        if ($items->isEmpty()) {
            return response()->json('Data not found', 404);
        }
    
        return response()->json($items);
    }
}
