import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent implements OnInit{
  item: Item={ 
    id:0,
    name:'',
    category:'',
    brand:''
  }

  constructor(private itemService:ItemService, private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    const id=this.route.paramMap.subscribe((params)=>{
    let id=Number (params.get('id'));
    this.getById(id);
    })
  }

  
  getById(id:Number){
    this.itemService.getById(id).subscribe((data)=>{
     this.item=data;
    })
  }

  cancel(){
    this.router.navigate(["item/home"])
  }

  update(){
    this.itemService.update(this.item).subscribe({
      next:(data)=>{
        this.router.navigate(["item/home"]);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
