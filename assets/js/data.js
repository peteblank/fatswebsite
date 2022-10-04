function something()
{
let url = 'https://fats-api.herokuapp.com/';
fetch(url,{
    headers: { "Content-type": "application/json",
  "Access-Control-Allow-Origin":"https://fatscrt.store" }
    })
    .then(res => res.json())
    .then(dollars => dollars.dollars)
    .then(dollars2=>{document.getElementById("usd").innerHTML=dollars2;
    console.log(dollars2);})
}

