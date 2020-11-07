import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pictures: any[]=[
    { id: 1, url: '../assets/images/fashion/StockSnap_EHBME5NRTA.jpg' },
    { id: 2, url: '../assets/images/fashion/StockSnap_FJPBVKMQZH.jpg' }
  ];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 2.6,
    spaceBetween: 30
  };

  purses: any[]=[
    { id: 1, url: '../assets/images/purses/video-game-console-2202528_1920.jpg' },
    { id: 2, url: '../assets/images/purses/video-game-console-2202554_1920.jpg' },
    { id: 3, url: '../assets/images/purses/video-game-console-2202580_1920.jpg' },
    { id: 4, url: '../assets/images/purses/video-game-console-2202635_1920.jpg' },
    { id: 5, url: '../assets/images/purses/video-game-console-2202666_1920.jpg' }
  ];

  headphones: any[]=[
    { id: 1, url: '../assets/images/purses/headphones/71XDQk9smEL._AC_SX522_.jpg' },
    { id: 2, url: '../assets/images/purses/headphones/89081900508-1.jpg' },
    { id: 3, url: '../assets/images/purses/headphones/D_NQ_NP_613798-MLA40507659252_012020-O.jpg' },
    { id: 4, url: '../assets/images/purses/headphones/JBL-TUNE500BT-Bluetooth-Headphones.jpg' },
    { id: 5, url: '../assets/images/purses/headphones/61JPyEqYGQL._SL1000_-e1585474116164.jpg' }
  ];

  beauty: any[]=[
    { id: 1, url: '../assets/images/purses/beauty/51EXPVsAc4L._AC_SX425_.jpg' },
    { id: 2, url: '../assets/images/purses/beauty/71HodBP0sXL._SL1500_.jpg' },
    { id: 3, url: '../assets/images/purses/beauty/81S3ZbtLaWL._SL1500_.jpg' },
    { id: 4, url: '../assets/images/purses/beauty/lisseur-professionnel-neptune-magister-zoom.jpg' },
    { id: 5, url: '../assets/images/purses/beauty/lisseur-titan-ceramic-magister.jpg' }
  ];

  offers: any[]=[
    { id: 1, url: '../assets/images/offers/adventure-2179282_1920.jpg' },
    { id: 2, url: '../assets/images/offers/baby-1399332_1920.jpg' },
    { id: 3, url: '../assets/images/offers/brown-shoes-1150071_1920.jpg' },
    { id: 4, url: '../assets/images/offers/children-817368_960_720.jpg' },
    { id: 5, url: '../assets/images/offers/dog-1149964_1920.jpg' },
    { id: 6, url: '../assets/images/offers/guitar-869217_1920.jpg' }
  ];

  offersS: any[]=[
    { id: 1, url: '../assets/images/offers/instrumento-gadget-cocina-1.jpg' },
    { id: 2, url: '../assets/images/offers/kitchen-2174593_1920.jpg' },
    { id: 3, url: '../assets/images/offers/sport-2250970_1920.jpg' }
  ];

  offersT: any[]=[
    { id: 1, url: '../assets/images/offers/time-3091031_960_720.jpg' },
    { id: 2, url: '../assets/images/offers/tv-5017870_1920.jpg' }
  ];

  constructor() {}

}
