import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog = {
    tagline: 'NOTICIAS',
    title: 'Conoce las últimas noticias',
    post: [
      {id: 1, title: 'The first Article',
      author: 'AD', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 2, title: 'The second Article',
      author: 'AD', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 3, title: 'The third Article',
      author: 'AD', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 4, title: 'The fourth Article',
      author: 'AD', image: 'gallery-image-4.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 5, title: 'The fifth Article',
      author: 'AD', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 6, title: 'The sixth Article',
      author: 'AD', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'}
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
