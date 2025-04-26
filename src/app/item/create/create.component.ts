import { Component } from '@angular/core';
import { Item } from '../item';
import id from '@angular/common/locales/id';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

cancel() {
throw new Error('Method not implemented.');
}

  item:Item={
    id:0,
    name: '',
    category:'',
    brand: ''
  }

  constructor(private itemService:ItemService,private router:Router){}

  create(){
    this.itemService.create(this.item).subscribe({
      next:(data)=>{
        this.router.navigate(["item/home"]);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  cancelbtn(){
    this.router.navigate(["item/home"])
  }
  

}
