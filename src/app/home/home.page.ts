import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class User {

  _id: number;
  itemName: string;
  itemCategory: string;
  itemPrice: string;
  itemImage:string;
  itemDescription:string;
}



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:5000/api')
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<User[]>('Get user', []))
      );
  }

  pageTitle: string;
  searchBar = false;
  data: any[];
   //data: any = [];
  menList = [
    {
      id: '4',
      name: 'Clothes 4',
      img: '../../../assets/imgs/nike7.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '1',
      name: 'Clothes 1',
      img: '../../../assets/imgs/veste.png',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '2',
      name: 'Clothes 2',
      img: '../../../assets/imgs/nike8.jpeg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '3',
      name: 'Clothes 3',
      img: '../../../assets/imgs/nike6.jpg',
      detail: 'little come from france',
      price: '88.22'
    },  {
      id: '1',
      name: 'Clothes 1',
      img: '../../../assets/imgs/veste.png',
      detail: 'little come from france',
      price: '88.22'
    }, {
      id: '4',
      name: 'Clothes 4',
      img: '../../../assets/imgs/nike7.jpg',
      detail: 'little come from france',
      price: '88.22'
    }
  ];

  womenList = [
    {
      id: '1',
      name: 'Clothes 1',
      img: '../../../assets/imgs/jeans.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '2',
      name: 'Clothes 2',
      img: '../../../assets/imgs/nike1.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '3',
      name: 'Clothes 3',
      img: '../../../assets/imgs/nike2.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '4',
      name: 'Clothes 4',
      img: '../../../assets/imgs/nike3.jpg',
      detail: 'little come from france',
      price: '88.22'
    }, {
      id: '2',
      name: 'Clothes 2',
      img: '../../../assets/imgs/nike1.jpg',
      detail: 'little come from france',
      price: '88.22'
    },  {
      id: '1',
      name: 'Clothes 1',
      img: '../../../assets/imgs/jeans.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
  ];

  constructor( public actRoute: ActivatedRoute, public menuController: MenuController, private httpClient: HttpClient ) {}

  ngOnInit(): void {

    const genre = this.actRoute.snapshot.params.genre;
    this.pageTitle = (genre === 'woman') ? 'Women' : 'Men';
    this.getUsers().subscribe((response) => {
      this.data = response;
    })
    //this.data = (genre === 'woman') ? this.womenList : this.menList;
  }

  /// open menu
  async openMenu() {
    await this.menuController.toggle();
  }

  // Refresh Data
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  // Load Data for infinite scroll
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
