import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  private project: any;

  constructor(private route: ActivatedRoute, private projService: ProjectService) { 
  }

  ngOnInit() {
    this.route.params.subscribe((values: {name: string}) => {
      this.project = this.projService.projects.find(x => x.name == values.name);
    })
  }

}
