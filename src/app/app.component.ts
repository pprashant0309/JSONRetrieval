import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  url: string = 'https://jsonplaceholder.typicode.com/users';
  res: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.res = data;
    })
  }
}
