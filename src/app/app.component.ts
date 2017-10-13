import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  user = [
     {name: "Bill Gates" , email: "b@gmail.com",importance:"High",subject:"New Windows", content:"Windows XI"},
     {name: 'Johan Gates',email: "jg@gmail.com", importance: "High", subject: "New Windows", content: "Windows XI" },
     {name:'Dan Gates', email: "dg@gmail.com", importance: "High", subject: "New iOS", content: "Windows XI" },
     {name:'Sam Gates', email: "sg@gmail.com", importance: "High", subject: "New MEAN", content: "Windows XI" }

  ] 
    
}

