import { Component, OnInit } from '@angular/core';
import { Banda } from './banda';
import { BandaService } from './banda.service';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {
  bandas: Array<Banda>= [];
  average:number=0;
  selected=false;
  selectedBanda!: Banda;


  constructor(private bandaService: BandaService) { }
  getBandas(){
    this.bandaService.getBandas().subscribe(bandas=> {
      this.bandas=bandas
    })
  }
  getPromedioIntegrantes(){
    let sum: number = 0;
    this.bandaService.getBandas().subscribe(bandas=> {
    this.bandas=bandas;
    this.bandas.forEach((banda)=>sum=sum+banda.numberOfMembers);
    let numBandas:number= bandas.length;
    console.log(sum);
    return this.average=sum/numBandas;
    });
  }
  onSelected(banda:Banda){
    this.selected=true;
    this.selectedBanda=banda;
  }

  ngOnInit() {
    this.getBandas();
    this.getPromedioIntegrantes();
  }

}
