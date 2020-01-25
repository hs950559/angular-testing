import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';


@NgModule({
  declarations: [PostsComponent, AddPostComponent, EditPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PostsService ]
})
export class PostsModule { }
