import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm?: FormGroup;

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      
    })
  }

  enviar(event: Event){
    event.preventDefault();
  }

  ngOnInit(): void {
    
  }

}
