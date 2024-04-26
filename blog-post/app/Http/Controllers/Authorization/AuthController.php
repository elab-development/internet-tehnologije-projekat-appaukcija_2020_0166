<?php

namespace App\Http\Controllers\Authorization;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'broj_telefona' => 'required|string|max:20',
            'adresa' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'broj_telefona' => $request->broj_telefona,
            'adresa' => $request->adresa
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Korisnik je kreiran!',
            'Korisnik' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer'

        ]);
    }
    public function login(Request $request)
    {

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()
                ->json(['message' => 'Unauthorized'], 401);
        }
        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()
            ->json(['message' => 'Hi ' . $user->username . '. welcome to home', 'access_token' => $token, 'token_type' => 'Bearer', 'user_id'=>$user->id,'role'=>$user->role,'novac'=>$user->novac]);

    }

    public function logout(Request $request)
    {
       $request->user()->currentAccessToken()->delete();
       return response()
            ->json(['message' => 'Successful logout.']);
    }
}
