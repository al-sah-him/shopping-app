import { Component, OnInit, ViewChild } from '@angular/core';
import {Route, ActivatedRoute } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { IonSlides } from '@ionic/angular';

export class User {

_id: number;
itemName: string;
itemCategory: string;
itemPrice: string;
itemImage:string;
itemDescription:string;
}

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  number = 0;
  id:any;

//_id: number;
  itemName: any;
  itemCategory: any;
  itemPrice: any;
  itemImage:any;
  itemDescription:any;

  constructor(private actRoute: ActivatedRoute, private photoViewer: PhotoViewer) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {

    

  }

  onViewer(img) {
    this.photoViewer.show(img);
  }

  addCart() {
    this.number += 1;
  }

}
