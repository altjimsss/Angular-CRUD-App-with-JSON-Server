import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _httpClient: HttpClient) { }

  getAllitem(){
    return this._httpClient.get<Item[]>("http://localhost:3000/items")
  }  

  create(data:Item){
    return this._httpClient.post("http://localhost:3000/items", data);
  }

  getById(id:Number){
    return this._httpClient.get<Item>(`http://localhost:3000/items/${id}`);
  }
  update(data:Item) {
    return this._httpClient.put<Item>(`http://localhost:3000/items/${data.id}`,data);
  }
  delete(id:Number) {
    return this._httpClient.delete<Item>(`http://localhost:3000/items/${id}`);
  }
  
  
}
