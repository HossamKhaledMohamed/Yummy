$(document).ready(function () {
    
    $(".load-screen .spinner").fadeOut(1000, function () {
        $('.load-screen').fadeOut(1000,function () {
            $('body').css('overflow' , 'auto')
            $('.load-screen').remove();
        })
    });   
})

let myApi=[] ;
let finalRespones;
async function getApi() {
    let apiRespones=   await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    finalRespones= await apiRespones.json();
    myApi = finalRespones.meals;
    console.log(myApi)
    function displayItems() {
        let cartona = ``;
    for (let i = 0; i < myApi.length; i++) {
        cartona += ` <div class="col-md-3 mt-3">
        <div class="strMeal">
        <div class=strMealImd>
        <img src="${myApi[i].strMealThumb}" class="w-100 rounded alt="">
        <div class="hh2">
            <h2 class=" ">${myApi[i].strMeal}</h2>
         </div>
        </div>
         </div>
      </div>`
    }
    let iitems= $('#items');
   iitems.html(cartona);

    }
    
    displayItems()
    
}
getApi() ;

