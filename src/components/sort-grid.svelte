<script>
  import { ProjectService } from '../project.service';
  import * as Isotope from 'assets/js/isotope.pkgd.min.js';
</script>

<style>
  .button.is-checked {
    background-color: #38c695;
  }

  .button:hover {
      background-color: #38c695;
  }
</style>

<!-- SECTION HEADER -->
<div>
  <div class="section-header">
    <h2>Portfolio.</h2>
    <div class="sub-heading">
      Explore what I do.
    </div>
  </div>


  <!-- PROJECT LOADING ICON -->
  <div id="loader">
    <div class="loader-icon">
      <div class="loader">
        <svg class="circular" viewbox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
        </svg>
      </div>
    </div>
  </div>

  <!-- PROJECTS -->
  <div class="col-lg-12" id="portfolio-list">

    <div class="button-group filters-button-group">
      <!--<button class="button is-checked btn btn-default standard-button red-button" data-filter="*">All Projects</button>-->
      <button class="button is-checked btn btn-default standard-button red-button" data-filter=".category-games">Video Games</button>
      <button class="button btn btn-default standard-button red-button" data-filter=".category-software">Software</button>
      <button class="button btn btn-default standard-button red-button" data-filter=".category-animations">Animations</button>
      <button class="button btn btn-default standard-button red-button" data-filter=".category-publications">Publications</button>
      <button class="button btn btn-default standard-button red-button" data-filter=".category-teaching">Teaching</button>
    </div>

    <div class="portfolio-items grid">

      <!-- SINGLE PROJECT -->
      <figure *ngFor="let proj of projService.projects" class="effect-zoe fadeInLeft" [ngClass]="proj.tags | stringFormat:'category-{0}'" [attr.data-priority]="proj.priority" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">

        <!-- PROJECT IMAGE and LINK -->
        <!-- <a [routerLink]="['/portfolio', {outlets: {portfoliopage: [proj.name]}}]" title="Click to view details" class="more">
          <img src="./assets/images/projects/{{proj.images[0]}}" alt="">
          <p class="description">
            <span class="icon icon-plus"></span>
          </p>
        </a> -->

        <figcaption>
          <div class="four-lines">
            <div class="line red-line-bottom">
            </div>
            <div class="line green-line-bottom">
            </div>
            <div class="line purple-line-bottom">
            </div>
            <div class="line yellow-line-bottom">
            </div>
          </div>

          <div class="caption-text">
            <h6 class="dark-text">{{proj.name}}</h6>
            <div *ngIf="proj.otherInfo.Roles" class="dark-text extra-small-text">Roles: {{proj.otherInfo.Roles}}</div>
          </div>

        </figcaption>
      </figure>
    </div>
  </div>
</div>  

  <!-- ngAfterViewInit() {

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
 -->
