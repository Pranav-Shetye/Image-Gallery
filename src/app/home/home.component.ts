import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  searchText:string = "";
  
  card:Array<any> = [
    {
      "name" : "Beach",
      "img" : "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Beach",
      "img" : "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Beach",
      "img" : "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Beach",
      "img" : "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Beach",
      "img" : "https://images.pexels.com/photos/1710795/pexels-photo-1710795.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Beach",
      "img" : "https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600"
    },



    {
      "name" : "Mountain",
      "img" : "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Mountain",
      "img" : "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Mountain",
      "img" : "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Mountain",
      "img" : "https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Mountain",
      "img" : "https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Mountain",
      "img" : "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600"
    },


    {
      "name" : "Forest",
      "img" : "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Forest",
      "img" : "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Forest",
      "img" : "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Forest",
      "img" : "https://images.pexels.com/photos/132428/pexels-photo-132428.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Forest",
      "img" : "https://images.pexels.com/photos/1735675/pexels-photo-1735675.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Forest",
      "img" : "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600"
    },


    {
      "name" : "Animal",
      "img" : "https://images.pexels.com/photos/2263936/pexels-photo-2263936.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Animal",
      "img" : "https://images.pexels.com/photos/3498323/pexels-photo-3498323.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Animal",
      "img" : "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Animal",
      "img" : "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Animal",
      "img" : "https://images.pexels.com/photos/5350167/pexels-photo-5350167.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Animal",
      "img" : "https://images.pexels.com/photos/704454/pexels-photo-704454.jpeg?auto=compress&cs=tinysrgb&w=600"
    },


    {
      "name" : "Bird",
      "img" : "https://images.pexels.com/photos/574882/pexels-photo-574882.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Bird",
      "img" : "https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Bird",
      "img" : "https://images.pexels.com/photos/54635/swan-water-bird-animal-nature-54635.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Bird",
      "img" : "https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Bird",
      "img" : "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Bird",
      "img" : "https://images.pexels.com/photos/106691/pexels-photo-106691.jpeg?auto=compress&cs=tinysrgb&w=600"
    },



    {
      "name" : "Fish",
      "img" : "https://images.pexels.com/photos/4593102/pexels-photo-4593102.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Fish",
      "img" : "https://images.pexels.com/photos/1522160/pexels-photo-1522160.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Fish",
      "img" : "https://images.pexels.com/photos/1145274/pexels-photo-1145274.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Fish",
      "img" : "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Fish",
      "img" : "https://images.pexels.com/photos/11348768/pexels-photo-11348768.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      "name" : "Fish",
      "img" : "https://images.pexels.com/photos/1894350/pexels-photo-1894350.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

}


