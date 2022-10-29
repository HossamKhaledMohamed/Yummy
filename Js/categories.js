
let categoriesApi=[] ;
let categoriesApis;
async function getApicategories() {
    let apiCateg=   await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    finalcategApis= await apiCateg.json();
    categoriesApi = finalcategApis.categories;
    console.log(categoriesApi)
    function displaycategories() {
        let cartona = ``;
    for (let i = 0; i < categoriesApi.length; i++) {
        cartona += ` <div class="col-md-3 mt-3">
        <div onclick="gtApicategories('${categoriesApi[i].idMeal}')" class="categories">
        <div class=categoriesImd>
        <img src="${categoriesApi[i].strCategoryThumb}" class="w-100 rounded" alt="">
        <div class="categoriesh2">
            <h2 class=" ">${categoriesApi[i].strCategory}</h2>
            <p>${categoriesApi[i].strCategoryDescription.split(' ').splice(0,20).join(' ')}</p>
         </div>
        </div>
         </div>
      </div>`
    }
    let categItems= $('#categories');
        categItems.html(cartona);

    }
    
    displaycategories()
    
}
getApicategories() ;



let ctegoriesApi=[] ;
let ctegoriesApis;
async function gtApicategories(ctegoriesApi) {
    $(".displyCategories").fadeIn(100)
    let apiCateg=   await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ctegoriesApi}`);
    finalcategApis= await apiCateg.json();
    ctegoriesApi = finalcategApis.categories;
    console.log(ctegoriesApi)
    dsplaycategories(ctegoriesApi.meals[0])
    $(".displyCategories").fadeOut(500)
}
    function dsplaycategories(ctegoriesApi) {
        let cartona = ``;
    for (let i = 0; i < ctegoriesApi.length; i++) {
        cartona += `  <div class="row  p-2" >
        <div class="col-md-4  text-white">
          <img class="w-75" src="${ctegoriesApi[i].strMealThumb}" alt="" srcset=""><br>
          <h2>${ctegoriesApi[i].strCategory}</h2>
      </div>
      <div class="col-md-8  text-white">
          <h2>Instructions</h2>
          <p>${ctegoriesApi[i].strInstructions}</p>
          <p><b class="fw-bolder">Area :</b> Turkish</p>
          <p><b class="fw-bolder">Category :</b> Side</p>
          <h3>Recipes :</h3>
          <ul class=" ul d-flex flex-wrap-reverse  justify-content-between">
              <li class="   rounded">1 cup  Lentils</li>
              <li class="   rounded">1 large Onion</li>
              <li class="   rounded">1 large Carrots</li>
              <li class="   rounded">1 tbs Tomato Puree</li>
              <li class="   rounded">2 tsp Cumin</li>
              <li class="   rounded">1 tsp  Paprika</li>
              <li class="   rounded">1/2 tsp Mint</li>
              <li class="   rounded">1/2 tsp Thyme</li>
              <li class="   rounded">1/4 tsp Black Pepper</li>
              <li class="   rounded">1/4 tsp Red Pepper Flakes</li>
              <li class="   rounded">4 cups  Vegetable Stock</li>
              <li class="   rounded">1 cup  Water</li>
              <li class="   rounded">Pinch Sea Salt</li>
          </ul>
          <h3 class="my-2">Tags :</h3>
          <ul class="d-flex ul2 "><li class="my-3 rounded">Soup</li></ul>
          <a class="btn btn-success text-white" target="_blank" href="https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/">Source</a>
          <a class="btn youtube text-white" target="_blank" href="https://www.youtube.com/watch?v=VVnZd8A84z4">Youtub</a>
          </div>
          </div>`
    }
    let ctegItems= $('#displayCategor');
        ctegItems.html(cartona);
        $("html, body").animate({
                 scrollTop: 0
                }, 200)
            

    }
    
    







