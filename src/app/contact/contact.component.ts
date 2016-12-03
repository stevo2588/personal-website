import { EmailService } from './../email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public message: any = {name: '', email: '', subject: '', message: ''};

  constructor(private emailSrvc: EmailService) { }

  ngOnInit() {
  }

  onSubmit() {
      this.emailSrvc.sendEmail(this.message).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
    }

  handleResponse(response){
    console.log(response);
    console.log(response.status);
    if(response.ok){
      // this.message = {name: '', email: '', message: ''};
      alert('Message successfully sent');
    }

    else {
      alert('There was an error sending your message');
    }
  }

}
