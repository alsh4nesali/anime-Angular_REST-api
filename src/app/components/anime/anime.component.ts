import { Component,OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})

export class AnimeComponent {
  List:any;
  constructor(private service:AnimeService){
    this.List=[];
  }

  ngOnInit():void{
    this.getList()
  }


    getList(){
    this.service.getLink()
    .subscribe((result:any) =>{
      this.List=result;
    })
  }

}
