import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {NgZone} from '@angular/core'
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
  lat;
  lng;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public geolocation : Geolocation, private googleMaps:GoogleMaps, private ngZone:NgZone) {

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
    let marker = new google.maps.Marker({
      map: ctx.map,
      animation: google.maps.Animation.DROP,
      position : null
      //position: ctx.map.getCenter()
    });
    marker.position = ctx.map.getCenter();
    myLatLng = {lat : marker.position.lat(), lng : marker.position.lng()};
    let infowindow = new google.maps.InfoWindow({
      content : "<button class='btn-choice' (click)='goReservation('+ myLatLng.lat, myLatLng.lng +')'>Choisir cette destination!</button>"
    })
    this.updatePos(infowindow,myLatLng).then( infowindow.open(ctx.map, marker));
    console.log(infowindow.content);
    google.maps.event.addListener(marker, 'click', () => {
      //Call run function to set the data within angular zone to trigger change detection.
      this.ngZone.run(()=>{
        console.log();
      });
    })
  }

  updatePos(infowindow, myLatLng){
    return new Promise((resolve, reject) =>{
      infowindow.content = "<button class='btn-choice' (click)='goReservation("+myLatLng.lat+","+myLatLng.lng+")'>Choisir cette destination!</button>"
      console.log("success");
      resolve("Réussite");
    })
  }

  goReservation(lat, lng){
    console.log(lat, lng);
    this.nav.push();
  }
}
