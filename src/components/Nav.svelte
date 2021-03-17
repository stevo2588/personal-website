<script lang="ts">
	export let segment: string;
</script>

<style>
	/* nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	} */
</style>

<nav class="navbar navbar-inverse bs-docs-nav navbar-fixed-top sticky-navigation" role="navigation">
  <div class="container">
    <div class="navbar-header">

      <!-- NAVBAR EXPAND COLLAPSE ON MOBILE -->
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#alexis-navigation">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon icon-menu"></span>
      </button>

    </div>

    <div class="navbar-collapse collapse" id="alexis-navigation">
      <ul class="nav navbar-nav navbar-right main-navigation" id="internal-scroll">
        <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
        <li><a aria-current="{segment === 'skills' ? 'page' : undefined}" href="skills">skills</a></li>
        <!-- <li><a aria-current="{segment === 'portfolio' ? 'page' : undefined}" href="portfolio">portfolio</a></li> -->
        <!-- <li><a [routerLink]="['/portfolio', {outlets: {portfoliopage: ['portfolio-grid']}}]">Portfolio</a> -->
        <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
        <!-- <li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">contact</a></li> -->

        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
            the blog data when we hover over the link or tap it on a touchscreen -->
        <!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
      </ul>
    </div>

  </div>
</nav>
