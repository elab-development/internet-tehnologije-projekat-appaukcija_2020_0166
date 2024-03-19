<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuctionResource;
use App\Models\Auction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class AuctionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $auctions = Auction::all();
        return response()->json($auctions);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

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
            'item_id' => 'required|string|max:255',
            'vreme_pocetka' => 'required|date_format:Y-m-d H:i:s',
            'vreme_zavrsetka' => 'required|date_format:Y-m-d H:i:s',
          
         
           
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $auction = Auction::create([
            'item_id' => $request->item_id,
            'vreme_pocetka' => $request->vreme_pocetka,
            'vreme_zavrsetka' => $request->vreme_zavrsetka,
            
        ]);

        return response()->json(['message' => 'Auction created successfully.']);
    }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function show($auction_id)
    {
        $auction = Auction::find($auction_id);
        if (is_null($auction)) {
            return response()->json('Data not found', 404);
        }
        return response()->json($auction);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function edit(Auction $auction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Auction $auction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function destroy($auction_id)
    {
        $auction = Auction::find($auction_id);
        if (is_null($auction)) {
            return response()->json('Data not found', 404);
        }
        Auction::destroy($auction_id);
        return response()-> json('Successful delete', 200);
    }
    public function getBidsbyAuctionId($auction_id)
    {
        $auction = Auction::with('bids')->get()->where('id', $auction_id);
        if (is_null($auction)) {
            return response()->json('Data not found', 404);
        }
        return response()->json($auction);
    }

}
