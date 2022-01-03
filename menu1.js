
let url="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
async function get(){
let res=await fetch(url);
let data =await res.json();
let data=data.meals

console.log(data1);
disply(data1)
}
get()
function disply(aa){
    let main=document.createElement("div");
    aa.map(function(elem){
        let div=document.createElement ("div");
        let img=document.createElement("img");
        img.src=elem.strMealThumb;

        let btn=document.createElement("button");
        btn.innerText="Add to cart";
        div.append(img,btn)
        document.querySelector("body").append(main)
        main.append(div)

    })
}
