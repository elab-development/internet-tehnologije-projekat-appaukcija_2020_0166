<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'item';
    public function toArray($request)
    {

        // return parent::toArray($request);
        return [
            'id' => $this->resource->id,
            'naziv' => $this->resource->naziv,
            'opis' => $this->resource->opis,
            'pocetna_cena' => $this->resource->pocetna_cena,
            'trenutna_cena' => $this->resource->trenutna_cena,
            'user_id' => $this->resource->user_id,
            'url'=>$this->resource->url,
            'kategorija'=>$this->resource->kategorija

        ];
    }
}
