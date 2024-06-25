<?php

namespace App\Jobs;

use App\Models\Auction;
use App\Models\Bid;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class PlaceBidJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $auctionId;
    protected $bidAmount;
    protected $userId;
    
    protected $bid;
    public function __construct($auctionId, $bidAmount, $userId)
    {
        $this->auctionId = $auctionId;
        $this->bidAmount = $bidAmount;
        $this->userId = $userId;

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $this->bid = Bid::create([
            'auction_id' => $this->auctionId,
            'iznos' => $this->bidAmount,
            'user_id' => $this->userId,
            
        ]);
        $this->bid->save();
        
    }
      public function getBid()
    {
        return $this->bid;
    }
}