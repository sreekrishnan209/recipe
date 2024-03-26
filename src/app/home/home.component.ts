import { Component, OnInit } from '@angular/core';
import { ApiFetchingService } from '../services/api-fetching.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 allViews:any[]=[]

  constructor(private api:ApiFetchingService){}
  ngOnInit(): void {
   this.viewData()
  }



  

  viewData(){
    this.api.viewApi().subscribe({
      next:(res:any)=>{
        console.log(res.recipes);
        this.allViews=res.recipes
        
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
    })
  }
   
    
  

}
