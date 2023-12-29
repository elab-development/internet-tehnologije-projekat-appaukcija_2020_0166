<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Closure;

class EnsureUserIsAdmin extends Middleware
{
    public function handle($request, Closure $next, ...$guards)
    {
        if ($request->user() && $request->user()->role == 'admin') {
            return $next($request);
        }
    
        return response()->json(['message' => 'Unauthorized'], 403);
    }
}
