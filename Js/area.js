
let areaArray=[];
async function areaApi() {
    let getAreaApi   = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    let finalAreaApi = await getAreaApi.json();
    areaArray =finalAreaApi.meals;
    console.log(areaArray);

    function displayArea() {
        let cartonaArea =``;
        for (let i = 0; i < 20; i++) {
            cartonaArea+= `<div class="col-md-3 mt-3">
            <div class="areaMeal mb-4">
            <div class=areaIcon>
            <i class="fa-solid fa-city fa-3x areaIcon"></i>
            <div>
                <h2 class=" text-white">${areaArray[i].strArea}</h2>
              </div>
            </div>
             </div>
          </div>
            `
        }
        let areaId=$('#area');
        areaId.html(cartonaArea);
        
    }
    displayArea() 
}
areaApi();