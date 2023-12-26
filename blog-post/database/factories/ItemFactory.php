<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
       
        
        return [
            'naziv'=>fake()->word,
            'opis'=>fake()->text,
            'pocetna_cena'=>$pocetna_cena=fake()->randomFloat(2, 1, 1000),
            'trenutna_cena'=>fake()->randomFloat(2,$pocetna_cena,$pocetna_cena+1000),
            'user_id'=>User::factory()
        ];
    }
}
