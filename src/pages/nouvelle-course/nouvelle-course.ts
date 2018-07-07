import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent} from "@ionic-native/google-maps";
declare var google;

@Component({
  selector: 'page-nouvelle-course',
  templateUrl: 'nouvelle-course.html'
})
export class NouvelleCoursePage {
  @ViewChild('map') mapElement: ElementRef;
  mapReady: boolean = false;
  map: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public geolocation : Geolocation, private googleMaps:GoogleMaps) {
    
  }
  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
  
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) =>{
      console.log(err);
    })
  
    
  }
  addMarker(){
    let ctx = this;
    let myLatLng;
    let infowindow = new google.maps.InfoWindow({
      content : "<div><button class='btn-choice' (onclick)='goReservation()'>Choisir cette destination!</button></div>"
    })
    
    let marker = new google.maps.Marker({
      map: ctx.map,
      animation: google.maps.Animation.DROP,
      position : null
      //position: ctx.map.getCenter()
    });
    marker.position = ctx.map.getCenter();
    myLatLng = {lat : marker.position.lat(), lng : marker.position.lng()};
    this.updatePos(infowindow,myLatLng).then( infowindow.open(ctx.map, marker));
    console.log(infowindow.content);
  }

  updatePos(infowindow, myLatLng){
    return new Promise((resolve, reject) =>{
      infowindow.content = "<div><button class='btn-choice' (onclick)='goReservation("+myLatLng.lat+","+myLatLng.lng+")'>Choisir cette destination!</button></div>"
      console.log("success");
      resolve("Réussite");
    })
  }
}
