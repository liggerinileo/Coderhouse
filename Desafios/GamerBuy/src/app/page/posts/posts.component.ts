import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.get().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    }, (err: any) => {
      console.log(err);
      
    });
  }

}
