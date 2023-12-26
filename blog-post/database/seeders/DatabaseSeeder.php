<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Auction;
use App\Models\Item;
use App\Models\User;
use App\Models\Bid;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Auction::truncate();
        Item::truncate();
        User::truncate();
        Bid::truncate();
        $user1 = User::factory()->create();
        $user2 = User::factory()->create();
        $user3 = User::factory()->create();
        $user4 = User::factory()->create();

        $items2 = Item::factory(2)->create([
            'user_id' => $user2->id
        ]);
        $items3 = Item::factory(4)->create([
            'user_id' => $user3->id
        ]);
        $items4 = Item::factory(1)->create([
            'user_id' => $user4->id
        ]);
        $auction1 = Auction::factory()->create([
            'item_id' => $items2[0]->id
        ]);
        $auction2 = Auction::factory()->create([
            'item_id' => $items3[0]->id
        ]);
        $auction3 = Auction::factory()->create([
            'item_id' => $items3[1]->id
        ]);
        $auction4 = Auction::factory()->create([
            'item_id' => $items4[0]->id
        ]);
        Bid::factory(3)->create([
            'user_id' => $user1->id,
            'auction_id' => $auction1->id
        ]);
    }



}
