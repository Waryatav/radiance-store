jQuery(document).ready(function($) {
     var cataljgue_ul = $(".catalogue_menu");
     var catalogue_li= cataljgue_ul.children("li");
      $(catalogue_li).each(function (i, catalogue_li) {
               if(i<6){
                   $(catalogue_li).addClass("visible-item");
               }

     });

     $('.catalogue_arrow_down').click(function () {
         event.preventDefault();
         var allElements = cataljgue_ul.find("li");
         //console.log(allElements);
         var allHiddenElements = cataljgue_ul.find(".hidden");
        // console.log(allHiddenElements);
         var visibleElements = $(".catalogue_menu").find(".visible-item");
         //console.log(visibleElements);

         var index = visibleElements.length+allHiddenElements.length;
         console.log(index);
         console.log(allElements.length);
         if(index < allElements.length){
             $(visibleElements[0]).removeClass("visible-item").addClass('hidden');
             $(allElements[visibleElements.length+allHiddenElements.length]).addClass("visible-item");
         }else{
             return false;
         }
     })

    $(document).on("click",".catalogue_arrow_up",function () {
        event.preventDefault();
        var allHiddenElements = cataljgue_ul.find(".hidden");
        
        var visibleElements = $(".catalogue_menu").find(".visible-item");
        if(allHiddenElements.length>0){
            $(allHiddenElements[allHiddenElements.length-1]).removeClass("hidden").addClass("visible-item");
            $(visibleElements[visibleElements.length-1]).removeClass("visible-item");

        }
        

    });
});