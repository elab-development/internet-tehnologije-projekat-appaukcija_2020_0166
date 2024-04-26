<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Http\Resources\UserCollection;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return new UserCollection($users);
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

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
          
            'novac' => 'required|numeric|',
          
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

      
        $user->novac = $request->novac;
        
        $user->save();

        return response()->json(['message' => 'User updated successfully.', 'data' => new UserResource($user)]);
    }    //
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }

    public function getbyid($user_id)
    {
        $user = User::with('items')->find($user_id);
        if (is_null($user)) {
            return response()->json('Data not found', 404);
        }
        return response()->json($user);
    }
    
    public function getBidsbyUserId($user_id)
    {
        $user = User::with('bids')->find($user_id);
        if (is_null($user)) {
            return response()->json('Data not found', 404);
        }
        return response()->json($user);
    }
    public function getNovacbyUserId($user_id)
    {
        $user = User::find($user_id);

        if (!$user) {
            // Handle case where user is not found
            return response()->json(['error' => 'User not found'], 404);
        }

        // Retrieve the amount of money from the user
        $novac = $user->novac;

        return response()->json(['novac' => $novac]);
    
    }
}
