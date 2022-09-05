import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(private service : AppServiceService ) { }

  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi(){
    this.service.getData().subscribe((response)=>{
      console.log('Respuesta');
    })
  }
}
