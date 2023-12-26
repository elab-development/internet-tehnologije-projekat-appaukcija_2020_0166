<?php

namespace Database\Factories;

use App\Models\Auction;
use App\Models\USer;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bid>
 */
class BidFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'auction_id' => Auction::factory(),
            'iznos' => fake()->randomFloat(2, 1, 300),
            'user_id' => function () {

            },
        ];
    }
}
