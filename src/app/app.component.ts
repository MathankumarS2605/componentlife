import { Component } from '@angular/core';
import {OnInit,OnDestroy} from '@angular/core';
import {DoCheck , AfterContentChecked} from '@angular/core';
import {AfterContentInit} from '@angular/core';
import {AfterViewInit} from '@angular/core';
import {AfterViewChecked}  from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,OnDestroy,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,DoCheck {
  firstName:string="";
  lastName:string="";
  ngDoCheck(): void {//phase 2 - Validation  phase
    console.log('overall verification/validation started');
  }
  ngAfterViewChecked(): void {//phase 6
    console.log('View checking completed');
  }
  ngAfterViewInit(): void {//pahse 5
    console.log('View initailization completed');
  }
  ngAfterContentChecked(): void {//phase 4
    console.log('content checking completed');
  }
  ngAfterContentInit(): void {//phase 3 
    console.log('content  initailzation  completed');//
  }
  title = 'componentlife';
  ngOnDestroy(): void {
        //write the code for connecting to the backend to save the data before the componenet gets detroyed
    sessionStorage.setItem('session','destroy');
  }
  ngOnInit(): void {//phase 1 -Initailization phase 
    console.log('Init');
  }
  

 
}
