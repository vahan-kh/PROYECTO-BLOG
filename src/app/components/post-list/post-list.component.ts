import { Component, OnInit, inject } from '@angular/core';
import { Interface } from 'src/app/interfaces/interface.interface';
import { SERVICESService } from 'src/app/services/services.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})



export class PostListComponent implements OnInit {
  blog: Interface[] = [];
  servicio = inject(SERVICESService)

  ngOnInit(): void {
this.fetchPosts()

  }

  fetchPosts(): void {
    this.servicio.getAll().subscribe(
      (data: Interface[]) => {
        this.blog = data;
      },
      (error) => {
        console.error('Error al obtener los posts:', error);
      }
    );
  }
}






