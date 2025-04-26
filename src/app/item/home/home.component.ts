import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corrected here (styleUrls instead of styleUrl)
})
export class HomeComponent implements OnInit {
[x: string]: any|string;

  items: Item[]=[];
  
  constructor(private itemService:ItemService) {}

  ngOnInit(): void {
    
    this.itemService.getAllitem().subscribe((data: Item[]) => {
      this.items = data;
    });
  }
  delete(id:Number){
    const isConfirmed=window.confirm("Are you sure to delete");
    if(isConfirmed){
    this.itemService.delete(id).subscribe((data)=>{
      this.items=this.items.filter(itm=>itm.id!==id);
    })
    window.location.reload();
  }
  }
}
