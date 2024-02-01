import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUserById(id: number): User {
    return this.getAll().find(user => user.id == id)!;
  }
  getAll(): User[] {
    return [
      {
        id: 1,
        role:'admin',
        username:'Aleksandar',
        email:'aleksandarzivanovic12@gmail.com',
        password:'aco12345',
        broj_telefona:'0633561289',
        adresa:"Voijislava Ilica 100"

      },
      {
        id: 2,
        role:'',
        username:'Mateja',
        email:'matejabekovic335@gmail.com',
        password:'mateja12345',
        broj_telefona:'0623378560',
        adresa:"Voijislava Ilica 200"
      },
      {
        id: 3,
        role:'',
        username:'Petar',
        email:'petarpetrovic335@gmail.com',
        password:'petar12345',
        broj_telefona:'0653378250',
        adresa:"Voijislava Ilica 300"
      },
      {
        id: 4,
        role:'',
        username:'Janko',
        email:'jankojankovic335@gmail.com',
        password:'janko12345',
        broj_telefona:'0622267845',
        adresa:"Voijislava Ilica 400"
      },
    ]
  }
}
