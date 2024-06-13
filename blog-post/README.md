# Online Auction Application

## Opis projekta

Ovo je online aplikacija za aukcije koja omogućava korisnicima da postavljaju aukcije, nude ponude i prate svoje aukcije u realnom vremenu. Projekat je razvijen koristeći Laravel za backend i Angular za frontend.

## Funkcionalnosti

- Registracija i prijava korisnika
- Kreiranje novih i brisanje starih aukcija
- Pregled svih aktivnih aukcija
- Ponuđivanje na aukcije u realnom vremenu
- Pregled istorije aukcija



## Tehnologije

- Laravel 8
- Angular 12
- MySQL baza podataka

## Zahtevi

- PHP 7.4+
- Composer
- Node.js 14+
- MySQL

## Pokretanje projekta

### Backend (Laravel)

1. Klonirajte repozitorijum:
    ```bash
    git clone https://github.com/korisnicko-ime/auction-app.git
    cd auction-app
    ```

2. Instalirajte zavisnosti:
    ```bash
    composer install
    ```

3. Kreirajte `.env` fajl:
    ```bash
    cp .env.example .env
    ```

4. Podesite parametre baze podataka u `.env` fajlu.

5. Generišite aplikacioni ključ:
    ```bash
    php artisan key:generate
    ```

6. Migrirajte baze podataka:
    ```bash
    php artisan migrate
    ```

7. Pokrenite razvojni server:
    ```bash
    php artisan serve
    ```

### Frontend (Angular)

1. Pređite u direktorijum frontend-a:
    ```bash
    cd frontend
    ```

2. Instalirajte zavisnosti:
    ```bash
    npm install
    ```

3. Pokrenite Angular razvojni server:
    ```bash
    ng serve
    ```

### Pristup aplikaciji

- Backend će biti dostupan na: `http://localhost:8000`
- Frontend će biti dostupan na: `http://localhost:4200`




