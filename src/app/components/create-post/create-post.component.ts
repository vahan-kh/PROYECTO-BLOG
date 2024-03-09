import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']

})


export class CreatePostComponent implements OnInit {
  private route = inject(Router)
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
      autor: new FormControl('', [Validators.required]),

    })
  }

  ngOnInit(): void {

  }

  onSubmit() {

    if (this.formulario.valid) {

      this.formulario.reset();


    
  }




}
close(): void {
  this.route.navigate(['/postList']);
}


}


