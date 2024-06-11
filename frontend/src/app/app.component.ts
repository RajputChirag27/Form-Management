import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  emailFooter = 'sasticompany@gmail.com'

  ngOnInit() {
    console.log('App started Successfully by Chirag');
  }



}