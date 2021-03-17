import { EmailService } from './../email.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;

  sendSuccess: boolean = null;

  constructor(private emailSrvc: EmailService, fb: FormBuilder) {
    var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    this.messageForm = fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      'subject': [null, Validators.required],
      'msg': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
      this.emailSrvc.sendEmail(value).subscribe(
        response => this.sendSuccess = true,
        error => this.sendSuccess = false
      );
  }
}
