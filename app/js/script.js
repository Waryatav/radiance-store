jQuery(document).ready(function($) {
     var cataljgue_ul = $(".catalogue_menu");
     var catalogue_li= cataljgue_ul.children("li");
      $(catalogue_li).each(function (i, catalogue_li) {
               if(i<6){
                   $(catalogue_li).addClass("visible-item");
               }else {
                   $(catalogue_li).css({"display":"none"});
               }

     });

    var custom_care_ul = $(".custom_care__menu");
    var custom_care_li= custom_care_ul.children("li");
    $(custom_care_li).each(function (i, custom_care_li) {
        if(i<4){
            $(custom_care_li).addClass("visible-item");
        }else {
            $(custom_care_li).css({"display":"none"});
        }

    });


       $(document).on("click", ".catalogue_arrow_down", function () {
         //event.preventDefault();
         var allElements = cataljgue_ul.find("li");
         //console.log(allElements);
         var allHiddenElements = cataljgue_ul.find(".hidden");
        // console.log(allHiddenElements);
         var visibleElements = $(".catalogue_menu").find(".visible-item");
         //console.log(visibleElements);

         var index = visibleElements.length+allHiddenElements.length;

         if(index < allElements.length){

             $(visibleElements[0]).removeClass("visible-item").slideUp().addClass('hidden');
             $(allElements[visibleElements.length+allHiddenElements.length]).slideDown().addClass("visible-item");
         }else{
             return false;
         }
           return false;
       });

    $(document).on("click",".catalogue_arrow_up",function () {
        //event.preventDefault();
        var allHiddenElements = cataljgue_ul.find(".hidden");
        
        var visibleElements = $(".catalogue_menu").find(".visible-item");
        if(allHiddenElements.length>0){
            $(allHiddenElements[allHiddenElements.length-1]).slideDown().removeClass("hidden").addClass("visible-item");
            $(visibleElements[visibleElements.length-1]).slideUp().removeClass("visible-item");

        }

        return false;
    });

    //custom care
    $(document).on("click", ".custom_care__arrow_down", function () {
        //event.preventDefault();
        var allElements = custom_care_ul.find("li");

        var allHiddenElements = custom_care_ul.find(".hidden");

        var visibleElements = $(".custom_care__menu").find(".visible-item");

        var index = visibleElements.length+allHiddenElements.length;

        if(index < allElements.length){

            $(visibleElements[0]).removeClass("visible-item").slideUp().addClass('hidden');
            $(allElements[visibleElements.length+allHiddenElements.length]).slideDown().addClass("visible-item");
        }else{
            return false;
        }
    return false;
    });

    $(document).on("click",".custom_care__arrow_up",function () {
        //event.preventDefault();
        var allHiddenElements = custom_care_ul.find(".hidden");

        var visibleElements = $(".custom_care__menu").find(".visible-item");
        if(allHiddenElements.length>0){
            $(allHiddenElements[allHiddenElements.length-1]).slideDown().removeClass("hidden").addClass("visible-item");
            $(visibleElements[visibleElements.length-1]).slideUp().removeClass("visible-item");

        }

        return false;
    });


    var selectSortItems = document.querySelectorAll('#ch-sort-list li');
    var selectSortLabel = document.querySelector('#sort-by span:first-child');
    for(i=0; i<selectSortItems.length; i++){
        var li = selectSortItems.item(i);
        li.onclick = function(){
            var selectSortCurrent = document.querySelector('#ch-sort-list li.ch-sort-list-active');
            selectSortCurrent.removeAttribute('class');
            selectSortLabel.innerHTML = this.innerHTML;
            this.className = 'ch-sort-list-active';
        }
    };
});