import { Component, Input, OnInit } from '@angular/core';
import { Banda } from '../banda';

@Component({
  selector: 'app-banda-Detail',
  templateUrl: './banda-Detail.component.html',
  styleUrls: ['./banda-Detail.component.css']
})
export class BandaDetailComponent implements OnInit {
  @Input() bandaDetail!: Banda;

  constructor() { }

  ngOnInit() {
  }

}
