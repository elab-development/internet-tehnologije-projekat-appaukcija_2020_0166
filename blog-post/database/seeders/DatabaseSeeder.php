<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Item;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Item::factory(3)->create();
        $user1 = User::factory()->create();
        $user2 = User::factory()->create();
        $user3 = User::factory()->create();
        $user4 = User::factory()->create();
        Item::factory(3)->create([
            'user_id' => $user1->id
        ]);
        Item::factory(2)->create([
            'user_id' => $user2->id
        ]);
        Item::factory(4)->create([
            'user_id' => $user3->id
        ]);
        Item::factory(1)->create([
            'user_id' => $user4->id
        ]);
    }
    
}
