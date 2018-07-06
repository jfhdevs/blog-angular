import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostsService } from '../services/posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() indice: number;
  
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {  }

  onIncLove() { this.postsService.plusLoveIts(this.indice); }
  onDecLove() { this.postsService.moinsLoveIts(this.indice); }
  onRemovePost(post: Post) { this.postsService.removePost(this.post); } 

  postcolor () {
    if (this.post.loveIts > 0)        { return 'aquamarine ';
    } else if (this.post.loveIts < 0) { return 'pink';
    } else                            { return 'white';
    } // if
  } // postcolor

} // class PostListItemComponent