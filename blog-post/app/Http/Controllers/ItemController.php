<?php

namespace App\Http\Controllers;

use App\Http\Resources\ItemCollection;
use App\Http\Resources\ItemResource;
use App\Models\Item;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Item::all();
        return new ItemCollection($items);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255',
            'opis' => 'required|string|max:100',
            'pocetna_cena' => 'required|numeric',
            'trenutna_cena' => 'required|numeric',
            'url' => 'required',
            'kategorija' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $item = Item::create([
            'naziv' => $request->naziv,
            'opis' => $request->opis,
            'pocetna_cena' => $request->pocetna_cena,
            'trenutna_cena' => $request->trenutna_cena,
            'user_id' => Auth::user()->id,
            'url' => $request->url,
            'kategorija'=>$request->kategorija
        ]);

        return response()->json(['message' => 'Item created successfully.', 'data' => new ItemResource($item)]);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show(Item $item)
    {
        return new ItemResource($item);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {
        $validator = Validator::make($request->all(), [
            // 'naziv' => 'required|string|max:255',
            // 'opis' => 'required|string|max:100',
            // 'pocetna_cena' => 'required|numeric|max:1000',
            'trenutna_cena' => 'required|numeric|max:10000',
            // 'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        // $item->naziv = $request->naziv;
        // $item->opis = $request->opis;
        // $item->pocetna_cena = $request->pocetna_cena;
        $item->trenutna_cena = $request->trenutna_cena;
        // $item->user_id = $request->user_id;
        $item->save();

        return response()->json(['message' => 'Item updated successfully.', 'data' => new ItemResource($item)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        $item->delete();
        return response()->json('Item deleted successfully');
    }
    public function getAuctionbyItemId($item_id)
    {
        $item = Item::with('auction')->where('id', $item_id)->first();
        if (is_null($item)) {
            return response()->json('Data not found', 404);
        }
        return response()->json($item);

    }

}
