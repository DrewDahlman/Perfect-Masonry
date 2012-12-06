/*
 * @MASON
 * @AUTHOR: Drew Dahlman ( www.drewdahlman.com )
 * @DATE: 12.6.12
 * @VERSION: 1
*/

(function(){
	GRID = function(par,el,sel,ratio,sizes){
		var self = this,ran,ranSize,h,w;

		self.options = {
			parent: $(par),
			el: $(el),
			sel: $(sel),
			ratio: ratio,
			block: {
				height: 0,
				width: 0
			},
			matrix: []
		}

		/*
		 * Size array
		*/
		self.sizes = [];
		for(var i = 0; i < sizes.length; i++){
			self.sizes[i] = sizes[i];
		}

		self.setup = function(){

			/*
			 * Setup all options 
			*/

			// grid size
			self.options.parent.height(window.innerHeight);

			// block size
			self.options.block.height = (( window.innerWidth / self.cols() ) / self.options.ratio).toFixed(0);
			self.options.block.width = ( window.innerWidth / self.cols() );

			self.size_boxes();

		}
		self.size_boxes = function(){

			var col = self.cols();
			var matrix = [];

			if(col== 1){
				self.options.sel.each(function(){
					
					$this = $(this);
					self.options.sel.height(self.options.block.height);
					self.options.sel.width(self.options.block.width);

				});
			}
			else {
				self.options.sel.each(function(){
					
					$this = $(this);

					ran = Math.floor(Math.random()*self.sizes.length);
					ranSize = self.sizes[ran];

					$this.data('size',ran);

					h = (self.options.block.height * self.sizes[ran][1]).toFixed(2);
					w = self.options.block.width * self.sizes[ran][0];

					
					// box sizes
					$this.height(h+'px');
					$this.width(w+'px');
				});
			}

			var h = self.options.el.height();
			var bh = (h / self.options.block.height).toFixed(2);

			for(var i = 0; i < bh; i++){
				matrix[i] = [];
				for(var m = 0; m < self.cols(); m++){
					matrix[i][m] = false;
				}
			}

			self.options.sel.each(function(){
				var size = parseFloat($(this).data('size'));

				var c = Math.round($(this).position().left / self.options.block.width);
				var r = Math.round($(this).position().top / self.options.block.height);
				

				var h = self.sizes[size][1];
				var w = self.sizes[size][0];
				var a = h*w;

				for(var i = 0; i < a; i++){
					for(var bh = 0; bh < h; bh++){
						matrix[r+bh][c] = true;
						for(var bw = 0; bw < w; bw++){
							matrix[r+bh][c+bw] = true;
						}
					}
					
				}
				
			});

			var c = 0;
			var b = 0;
			for(var i = 0; i < matrix.length; i++){
				for(var c = 0; c < matrix[i].length; c++){
					if(matrix[i][c] == false){

						var ran = Math.floor(Math.random()*self.sizes.length);
						var ranSize = self.sizes[ran];

						var h = self.options.block.height;
						var w = self.options.block.width;

						var x = (i*h).toFixed(2);
						var y = c*w;

						self.options.el.append("<div class='box filler' style='position: absolute; left:"+y+"px; top: "+x+"px; height:"+h+"px; width: "+w+"px'></div>");
						
					}
				}
			}

		}
		self.cols = function(){
			/*
			 * Determine cols
			*/
			var w = Math.floor(window.innerWidth);
			var cols = 0;

			if(w < 480){
				cols = 1;
			}
			else if (w > 480 && w < 780){
				cols = 2;
			}
			else if (w > 780 && w < 1080){
				cols = 3;
			}
			else if( w > 1080 && w < 1320){
				cols = 4;
			}
			else if( w > 1320 && w < 1680){
				cols = 5
			}
			else {
				cols = 6;
			}
			return cols;
		}

		self.resize = function(){
			self.options.parent.height(window.innerHeight);
			self.options.block.height = ( window.innerWidth / self.cols() ) / 1.5;
			self.options.block.width = ( window.innerWidth / self.cols() );
			self.size_boxes();
		}

		$(window).resize(function () {
				$(".filler").remove();
		    $(".filler").each(function(){
					$(this).remove();
				});
	      self.resize();
		});

		self.setup();
		return self;
	};
})();