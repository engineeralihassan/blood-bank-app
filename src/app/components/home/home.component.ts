import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
loading:boolean=true;

slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

constructor() { }

ngOnInit() {
  setTimeout(() => {
    this.loading = false;
  }, 1000);
  this.slides[0] = {
    id: 0,
    src: '../../../assets/images/slide-03.jpg',
    title: 'First slide',
    subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  };
  this.slides[1] = {
    id: 1,
    src: '../../../assets/images/slide-02.jpg',
    title: 'Second slide',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
  this.slides[2] = {
    id: 2,
    src: '../../../assets/images/slide-03.jpg',
    title: 'Third slide',
    subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  }
}

}
