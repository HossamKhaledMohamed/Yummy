let ingredArray= [];
let finalIngredApi;
async function getIngredApi() {
    let ingredApi = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    finalIngredApi = await ingredApi.json()
    ingredArray = finalIngredApi.meals;
    function displayIngred() {
        
        let ingredCartona= ` `
        for (let i = 0; i <20; i++) {
    
            ingredCartona +=`<div class="col-md-3">
                <div class="text-center">
              <i class="fa-solid fa-bowl-food fa-3x icon"></i>
              <div class="text-white ps-1">
                <h2>${ingredArray[i].strIngredient}</h2>
              <p>${ingredArray[i].strDescription.split(' ').splice(0,20).join(' ') }</p>
               </div>
            </div>
          </div>
          `
        }
         let Ingid =$('#ingredients')
        Ingid.html(ingredCartona)
        console.log()
    }
    displayIngred()
   

  

}
getIngredApi()