import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() search = '';
  @Input() type = 'name';
  @Input() selectedCountry = '';
  @Input() selectedGenre = '';

  showMine = false;

  items= [
    {
      id: 1,
      name: "Prvi",
      country: "usa",
      date: "",
      singer: "Emma",
      selected: false,
      image: "https://www.w3schools.com/css/trolltunga.jpg",
      genre: 'pop'
    },
    {
      id: 2,
      name: "Drugi",
      country: "ca",
      date: "",
      singer: "Brian",
      selected: false,
      image: "https://orig00.deviantart.net/92ae/f/2009/230/4/1/spongebob_9_150x150_png_by_somemilk.png",
      genre: 'pop'
    },
    {
      id: 3,
      name: "Treci",
      country: "uk",
      date: "",
      singer: "Tom",
      selected: false,
      image: "http://www.blindfiveyearold.com/wp-content/uploads/2011/01/homer-simpson-150x150.jpg",
      genre: 'ro'
    },
    {
      id: 4,
      name: "Cetvrti",
      country: "ca",
      date: "",
      singer: "Albert",
      selected: false,
      image: "https://polarseven.com/wp-content/uploads/2015/03/150x150.gif",
      genre: 'ro'
    },
    {
      id: 5,
      name: "Peti",
      country: "uk",
      date: "",
      singer: "Albert",
      selected: false,
      image: "http://forum.ls-rp.com/download/file.php?avatar=205350_1406757042.gif",
      genre: 'ro'
    },
    {
      id: 6,
      name: "Sesti",
      country: "uk",
      date: "",
      singer: "Tom",
      selected: false,
      image: "https://www.tgnglobal.com/assets/makerspace-150x150-5d69d0f85589932d80c2f3caf7e8dee93daf5c6c2f3bf95a56331abd0103c146.png",
      genre: 'ro'
    },
    {
      id: 7,
      name: "Sedmi",
      country: "uk",
      date: "",
      singer: "Tom",
      selected: false,
      image: "http://goodfilmguide.co.uk/wp-content/uploads/2010/01/Avatar-1940-150x150.jpg",
      genre: 'hh'
    },
    {
      id: 8,
      name: "Osmi",
      country: "usa",
      date: "",
      singer: "Brian",
      selected: false,
      image: "http://upgracanica.com/wp-content/gallery/clanovi/thumbs/thumbs_Motorex-150x150.jpg",
      genre: 'hh'
    },
    {
      id: 9,
      name: "Deveti",
      country: "usa",
      date: "",
      singer: "Emma",
      selected: false,
      image: "http://www.liburnicon.com/wp-content/uploads/2017/07/fox-in-a-box-logo-150x150.jpg",
      genre: 'hh'
    },
    {
      id: 10,
      name: "Deseti",
      country: "usa",
      date: "",
      singer: "Emma",
      selected: false,
      image: "https://www.w3schools.com/css/trolltunga.jpg",
      genre: 'hh'
    },
    {
      id: 11,
      name: "Jedanaesti",
      country: "usa",
      date: "",
      singer: "Emma",
      selected: false,
      image: "https://www.sportsbookreview.com/forum/image.php?u=308975&dateline=1401948821",
      genre: 'pop'
    },
    {
      id: 12,
      name: "Dvanaesti",
      country: "ca",
      date: "",
      singer: "Brian",
      selected: false,
      image: "http://images.electricpig.co.uk/wp-content/uploads/2011/07/steam-logo-150x150.jpg",
      genre: 'pop'
    },
    {
      id: 13,
      name: "Trinaesti",
      country: "uk",
      date: "",
      singer: "Tom",
      selected: false,
      image: "http://www.sluniverse.com/php/vb/avatars/roy+modern.gif?dateline=1338308490",
      genre: 'ro'
    },
    {
      id: 14,
      name: "Cetrnaesti",
      country: "ca",
      date: "",
      singer: "Piratebay",
      selected: false,
      image: "http://www.hyunsdojo.com/community/download/file.php?avatar=3101_1407518995.jpeg",
      genre: 'ro'
    },
    {
      id: 15,
      name: "Petnaesti",
      country: "ca",
      date: "",
      singer: "Electro",
      selected: false,
      image: "https://nmap.org/images/nmap-401-demoscan-squarecrop-150x150.gif",
      genre: 'ro'
    },
    {
      id: 16,
      name: "Sesnaesti",
      country: "usa",
      date: "",
      singer: "Anna",
      selected: false,
      image: "https://www.prri.org/wp-content/uploads/2016/04/pbs-150x150.jpg",
      genre: 'ro'
    },
    {
      id: 17,
      name: "Sedamnaesti",
      country: "uk",
      date: "",
      singer: "Tom",
      selected: false,
      image: "https://www.tgnglobal.com/assets/supercharger-150x150-c4ca8a491018b66d16207b6333f0d4582b4686a5db57d39e28ba4c844dd625e7.png",
      genre: 'hh'
    },
    {
      id: 18,
      name: "Osamnaesti",
      country: "uk",
      date: "",
      singer: "Brian",
      selected: false,
      image: "https://dailytimes.com.pk/assets/uploads/2018/01/07/Trump-tweets-150x150.jpg",
      genre: 'hh'
    },
    {
      id: 19,
      name: "Devetnaesti",
      country: "usa",
      date: "",
      singer: "Merlin",
      selected: false,
      image: "https://www.intheline-cosmetics.com/wp-content/uploads/2017/10/brez-kofeina-150x150.png",
      genre: 'ro'
    },
    {
      id: 20,
      name: "Dvadeseti",
      country: "usa",
      date: "",
      singer: "Adam",
      selected: false,
      image: "http://igbd.org/wp-content/uploads/2012/12/izbnj-150x150.jpg",
      genre: 'hh'
    }
  ];



  myItems = [];

  constructor() { }

  ngOnInit() {
  }

  checkSelected() {
    this.myItems = this.items.filter(item => item.selected === true ? item : null);
    this.items.map(item => item.selected = false);
    if (this.myItems.length !== 0) {
      this.showMine = true;
    }
  }

  viewAll() {
    this.showMine = false;
  }


}
