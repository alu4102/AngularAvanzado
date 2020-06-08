import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notFound',
  templateUrl: './notFound.component.html'
})

export class NotFoundComponent implements OnInit {
  title = '404';

  ngOnInit() {
    console.log('notFound.component loaded');
}

}
