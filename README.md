Online Auction Application
Opis projekta
Ovo je online aplikacija za aukcije koja omogućava korisnicima da postavljaju aukcije, nude ponude i prate svoje aukcije u realnom vremenu. Projekat je razvijen koristeći Laravel za backend i Angular za frontend.

Funkcionalnosti
Registracija i prijava korisnika
Kreiranje novih i brisanje starih aukcija
Pregled svih aktivnih aukcija
Ponuđivanje na aukcije u realnom vremenu
Pregled istorije aukcija
Tehnologije
Laravel 8
Angular 12
MySQL baza podataka
Zahtevi
PHP 7.4+
Composer
Node.js 14+
MySQL
Pokretanje projekta
Backend (Laravel)
Klonirajte repozitorijum:

git clone https://github.com/korisnicko-ime/auction-app.git
cd auction-app
Instalirajte zavisnosti:

composer install
Kreirajte .env fajl:

cp .env.example .env
Podesite parametre baze podataka u .env fajlu.

Generišite aplikacioni ključ:

php artisan key:generate
Migrirajte baze podataka:

php artisan migrate
Pokrenite razvojni server:

php artisan serve
Frontend (Angular)
Pređite u direktorijum frontend-a:

cd frontend
Instalirajte zavisnosti:

npm install
Pokrenite Angular razvojni server:

ng serve
Pristup aplikaciji
Backend će biti dostupan na: http://localhost:8000
Frontend će biti dostupan na: http://localhost:4200
