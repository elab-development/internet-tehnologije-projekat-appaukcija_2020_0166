<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
 
        'naziv',
        'opis',
        'pocetna_cena',
        'trenutna_cena'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function aukcija(){
        return $this->belongTo(Auction::Class);
    }

}
