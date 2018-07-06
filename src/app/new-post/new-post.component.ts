import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
  	this.initForm();
  } // ngOnInit

  initForm(){
  	this.postForm = this.formBuilder.group({
  		title: ['', Validators.required],
  		content: ['', Validators.required]
  	})
  } // initForm

  onSavePost(){
  	const title = this.postForm.get('title').value;
  	const content = this.postForm.get('content').value;
  	const newPost = new Post(title, content);
  	this.postsService.createNewPost(newPost);
  	this.router.navigate(['/posts']);
  } // onSavePost

} // class NewPostComponent
