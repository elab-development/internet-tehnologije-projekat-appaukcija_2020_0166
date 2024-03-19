<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Auction extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_id',
        'vreme_pocetka',
        'vreme_zavrsetka',

    ];
    public function items()
    {
        return $this->belongsTo(Item::Class);
    }
    public function bids()
    {
        return $this->hasMany(Bid::Class);
    }
}
