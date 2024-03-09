import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component'
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    DetailPostComponent,
    CreatePostComponent,
    NavComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
