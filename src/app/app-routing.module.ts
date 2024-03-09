import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: PostListComponent},
  {path:'createPost', component: CreatePostComponent },
  {path:'detailPost/:id', component: DetailPostComponent },
  {path:'postList', component: PostListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
