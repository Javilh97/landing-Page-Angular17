import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.minLength(5)]]

    });
  }

  enviar(event: Event){
    event.preventDefault();
    console.log(this.contactForm.value);
    
  }

  ngOnInit(): void {
    
  }

  hasErrors(controlName: string, errorType: string){
    return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched;
  }

  

}
