
/* JavaScript content from js/scroll.js in folder common */
 
var slideDshId="";
function doslidings(slcid){
	
	slideDshId="jssor_"+slcid;
	/* if(isSector){
		 slideDshId="jssor_1";
		
	} else if(isPAL){
		 
		 slideDshId="jssor_2";
	 }else if(isPM){
		 
		 slideDshId="jssor_3";
	 }*/
	 
	 
	
	  var jssor_1_SlideshowTransitions = [
	                                      {$Duration:1200,$Opacity:2}
	                                    ];
	                                    
	                                    var jssor_1_options = {
	                                      $AutoPlay: false,
	                                      $SlideshowOptions: {
	                                        $Class: $JssorSlideshowRunner$,
	                                        $Transitions: jssor_1_SlideshowTransitions,
	                                        $TransitionsOrder: 1
	                                      },
	                                      $ArrowNavigatorOptions: {
	                                        $Class: $JssorArrowNavigator$
	                                      },
	                                      $BulletNavigatorOptions: {
	                                        $Class: $JssorBulletNavigator$
	                                      }
	                                    };
	                                    
	                                    var jssor_1_slider = new $JssorSlider$(slideDshId, jssor_1_options);
	                                    
	                                    //responsive code begin
	                                    //you can remove responsive code if you don't want the slider scales while window resizes
	                                    function ScaleSlider() {
	                                    	var jssor_1_slider = new $JssorSlider$(slideDshId, jssor_1_options);
	                                        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
	                                        //refSize=0;
	                                        if (refSize) {
	                                            refSize = Math.min(refSize, 600);
	                                            jssor_1_slider.$ScaleWidth(refSize);
	                                        }
	                                        else {
	                                            window.setTimeout(ScaleSlider, 30);
	                                        }
	                                        
	                                      //  $(".").parent().
	                                        
	                                    }
	                                    ScaleSlider();
	                                    $(window).bind("load", ScaleSlider);
	                                    $(window).bind("resize", ScaleSlider);
	                                    $(window).bind("orientationchange", ScaleSlider);
	                                    //responsive code end
	
}