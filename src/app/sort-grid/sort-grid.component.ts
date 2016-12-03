import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';

import * as Isotope from 'assets/js/isotope.pkgd.min.js';

@Component({
  selector: 'app-sort-grid',
  templateUrl: './sort-grid.component.html',
  styleUrls: ['./sort-grid.component.css'],
  providers: [],
})
export class SortGridComponent implements OnInit {

  constructor(private projService: ProjectService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    // init Isotope
    var grid = document.querySelector('.portfolio-items');
    var iso = new Isotope( grid, {
      // options
      itemSelector: '.effect-zoe',
      layoutMode: 'fitRows',
      getSortData: {
        priority: '[data-priority] parseInt'
      },
      sortBy: ['priority'],
      sortAscending: false
    });

    // bind filter button click
    $('.filters-button-group').on( 'click', 'button', function() {
      var fValue = $( this ).attr('data-filter');
      iso.arrange( {filter: fValue} );
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        /*
        $('.portfolio-items').children('figure').each(function () {
          $(this).removeClass('wow');
          $(this).removeAttr('data-wow-duration');
          $(this).removeAttr('data-wow-offset');
          $(this).removeAttr('data-wow-delay');
          $(this).removeAttr('animation-duration');
          $(this).removeAttr('animation-delay');
          $(this).removeAttr('animation-name');
      });
      */
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });

    iso.arrange( {filter: '.category-games'} );

  }


}
