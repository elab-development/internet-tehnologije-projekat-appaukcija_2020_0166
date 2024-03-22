<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('
            CREATE TRIGGER trg_increment_licitations_count AFTER UPDATE ON items
            FOR EACH ROW 
            BEGIN 
                IF OLD.trenutna_cena != NEW.trenutna_cena THEN 
                    UPDATE auctions 
                    SET broj_licitacija = broj_licitacija + 1 
                    WHERE item_id = NEW.id; 
                END IF; 
            END;
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP TRIGGER IF EXISTS trg_increment_licitations_count');
    }
};
