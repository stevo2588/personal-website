<script lang="ts">
	export const project: { name: string; description: string } = { name: 'NONE', description: 'NONE' };
</script>

<div class="container">
  <div class="single-project">

    <!-- START EDITING FROM HERE -->
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <div class="project-image"><img src="/images/projects/{/*{project.images[0]}*/ ""}" alt=""></div>
        </div>
        <div class="col-lg-6 col-md-6 text-left">
          <h5>{project.name}</h5>
          <p class="angular-with-newlines">
            {project.description}
          </p>
          <ul class="project-details-list">
          <!-- <li *ngFor="let info of project.otherInfo | mapToIterable"><span class="dark-text">{{info.key}}: </span> <span class="extra-small-text">{{info.val}}</span></li> -->
        </ul>
        </div>
      </div>

  </div>

</div>

<!-- BACK TO PORTFOLIO BUTTON ON LOADED PROJECT -->
<!-- <a id="back-button" class="back-button btn btn-default standard-button red-button" [routerLink]="['/portfolio', {outlets: {portfoliopage: ['portfolio-grid']}}]"><span class="icon icon-arrow-left"></span> Go Back</a> -->
