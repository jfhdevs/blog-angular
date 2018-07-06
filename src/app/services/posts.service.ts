import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from '../models/post';

@Injectable()
export class PostsService {

  posts: Post[] = [ new Post ('Premier post', 'Voici un premier post.'),
                    new Post ('Deuxième post', 'En voilà un second.'),                    
                    new Post ('Troisième post', 'Et enfin un petit dernier avec un texte un peu ' +
                              'plus long pour pouvoir texter le retour à la ligne automatique !')
                  ]; // posts

  postsSubject = new Subject<Post[]>();

  constructor() {}

  emitPosts() { this.postsSubject.next(this.posts); }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  } // createNewPost

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        } // if
      } // =>
    ); // .findIndex
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  } // removePost

  plusLoveIts(index: number) {
    this.posts[index].incLoveIts();
    this.emitPosts();
  } // plusLoveIts

  moinsLoveIts(index: number) {
    this.posts[index].decLoveIts();
    this.emitPosts();
  } // moinsLoveIts

} // class PostsService