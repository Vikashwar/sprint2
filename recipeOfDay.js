


var randomFood = async ()=> {

    try {
     var response = await fetch(`http://www.themealdb.com/api/json/v1/1/random.php`);
 
     // console.log(response);
 
     var data = await response.json();
     // console.log(data);
     return data.meals[0];
 
    }
 
    catch(err) {
        console.log(err);
    }
 }
 
 // randomFood();
 
 var appendRandom = async ()=> {
 var food_data = await randomFood();
 console.log(food_data);
 
 var main_container = document.getElementById('container');
 
 let div1 = document.createElement('div');
 div1.classList.add('first_div')
 
 let div2 = document.createElement('div');
 div2.classList.add('second_div')
 
 let img = document.createElement('img');
 img.src = food_data.strMealThumb;
 img.classList.add('recipe_img')
 // console.log(food_data.strMealThumb);
 
 let h2 = document.createElement('h2');
 h2.textContent = "Name: " + food_data.strMeal;
 h2.classList.add('recipe_name')
 // console.log(food_data.strMeal);
 
 let h3 = document.createElement('h3');
 h3.innerText = "Country Name: " + food_data.strArea;
 h3.classList.add('recipe_country')
 // console.log(food_data.strArea);
 
 let h4 = document.createElement('h4');
 h4.textContent = "Food Category: " + food_data.strCategory;
 h4.classList.add('recipe_cat')
 // console.log(food_data.strCategory);
 
 let p = document.createElement("p");
 p.textContent = "Instruction for recipe: " + food_data.strInstructions;
 p.classList.add('recipe_int')
 // console.log(food_data.strInstructions);
 
 div1.append(img,h2);
 div2.append(h3,h4,p);
 
 main_container.append(div1,div2)
 
 }
 
 appendRandom()
 
 var returnHome = () => {
     window.location.href = 'foodApp.html'
 }