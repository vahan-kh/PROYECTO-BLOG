import { Component, Inject, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Interface } from 'src/app/interfaces/interface.interface';
import { SERVICESService } from 'src/app/services/services.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  blog: Interface | undefined 
  blogId!: number;
  private servicio = inject(SERVICESService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.blogId =+ params['id'];
  this.details(this.blogId)});
  }

  details(id: number): void {
    this.servicio.getById(id).subscribe((data:Interface) => {
      this.blog = data;
    })

  }



}
