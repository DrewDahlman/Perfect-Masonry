##Perfect Masonry
<strong>NOTE!</strong>
Perfect-Masonry has been turned into a jQuery plugin and can be found here - <a href='https://github.com/DrewDahlman/Mason'>https://github.com/DrewDahlman/Mason</a>

A way to detect missing gaps in a grid of elements and fill in those gaps to create a perfect fluid grid.

View <a href='http://drewdahlman.com/experiments/perfectMasonry/'>DEMO</a>

<a href='http://www.drewdahlman.com/meusLabs/?p=218'>Read a blog post</a>

##HOW TO USE
<code>
	var _GRID = new MASON(
		'#parent_element',
		"#container_element",
		".selector_element",
		1.5, // ratio
		[
			[2,2],
			[3,1],
			[2,1],
			[1,1]
		]
	)
</code>

Be sure all of your elements are floated left.

##TODO
On some screen sizes there appears to be a slight shift of 1 - 6px on filler elements after resize, need to fix that.

<img src="http://www.drewdahlman.com/meusLabs/wp-content/uploads/2012/12/masonry-1024x640.jpg" alt="" title="masonry" width="100%" />