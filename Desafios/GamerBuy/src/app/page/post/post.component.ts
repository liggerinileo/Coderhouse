import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  id: number = 0;
  post: any;
  suscripcion: any;

  constructor(private rutaActiva: ActivatedRoute, private postsService: PostsService) { }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params.id;
    console.log(this.id);
    this.suscripcion = this.postsService.getPost(this.id).subscribe(post => {
      this.post = post;
      
    }, (err: any) => {
      console.log(err);
      
    });
    
  }



}
