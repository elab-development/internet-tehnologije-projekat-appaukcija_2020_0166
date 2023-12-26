<?php

namespace Database\Factories;
use App\Models\Item;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Auction>
 */
class AuctionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    
    {
        return [
            'item_id'=>Item::factory(),
            'vreme_pocetka'=>$vreme_pocetka=fake()->dateTimeThisYear(),
            'vreme_zavrsetka'=>fake()->dateTimeBetween($vreme_pocetka,'tomorrow'),
           
        ];
    }
}
