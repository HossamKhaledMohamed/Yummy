

let s ;
let srcArray=[];
async function getSrachApi(s) {
    let srcApi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`);
    let fainlSrcApi =await srcApi.json();
    srcArray=fainlSrcApi.meals;
    console.log(srcArray);
    let cartonaSrc=``
    for (let i = 0; i < srcArray.length; i++) {
        cartonaSrc+=` <div class="col-md-3 mt-3">
                        <div class="strMeal">
                            <div class=strMealImd>
                                <img src="${srcArray[i].strMealThumb}" class="w-100 rounded alt="">
                            <div class="hh2">
                                <h2 class=" ">${srcArray[i].strMeal}</h2>
                            </div>
                            </div>
                        </div> 
                    </div>`
    }
    let srcIdRow=$('#search');
    srcIdRow.html(cartonaSrc);

}
$('#srchByName').on('input',function () {
    s = $('#srchByName').val();
    if ( s.length > 0) {
        getSrachApi(s);
    }

});

$('#srchByFirstL').on('input',function () {
    s = $('#srchByFirstL').val();
    if ( s.length > 0) {
        getSrachApi(s);
    }

});
