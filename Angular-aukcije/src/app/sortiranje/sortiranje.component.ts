import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sortiranje',
  templateUrl: './sortiranje.component.html',
  styleUrl: './sortiranje.component.css'
})
export class SortiranjeComponent {
  options: string[] = ['Trenutnoj ceni','Datumu pocetka aukcije','A-Z'];
  option!: String;
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['sortTerm'])
        this.option = params['sortTerm'];
    })
  }
  sortiraj(option: String) {
    console.log(option);
    this.option=option;
    this.router.navigateByUrl('/sort/' + this.option);
  }

}
