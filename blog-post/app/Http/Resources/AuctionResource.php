<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AuctionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap='auction';
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->resource->id,
            'item' => new ItemResource($this->resource->item),
            'vreme_pocetka' => $this->resource->vreme_pocetka,
            'vreme_zavrsetka' => $this->resource->vreme_zavrsetka,
        ];
    }
}
