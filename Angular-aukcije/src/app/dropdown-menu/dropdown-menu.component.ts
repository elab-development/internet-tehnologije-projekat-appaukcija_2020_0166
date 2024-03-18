import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],

})
export class DropdownMenuComponent implements OnInit {
  options: string[] = ['Kompjuterske Igrice i Filmovi', 'Tehnika', 'Sport', 'Ostalo'];
  option!: String;
  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['filtrationTerm'])
        this.option = params['filtrationTerm'];
    })
  }
  filtriraj(option: String) {
    console.log(option);
    this.option=option;
    this.router.navigateByUrl('/filtration/' + this.option);
  }

}
