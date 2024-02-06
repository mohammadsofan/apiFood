async function getData(name){
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${name}`);
    const data= await response.json();
    const recipes = data.recipes;
    return recipes;
}

async function showData(name){
    const recipes = await getData(name);
    if(!recipes)alert('this category was not found');
    const html = recipes.map(e => `
        <div class ='recipe'>
            <div class='image overflow-hidden'>
                <img src='${e.image_url}'>
            </div>
            <h3 class='p-3'>${e.title}</h3>
        </div>
    `).join('');

    document.querySelector('.recipes .row').innerHTML = html;
    document.querySelector('.recipes h2').textContent = name + ' recipes'; 
    
}

showData('pizza');

const form = document.querySelector(".search-form");
form.addEventListener('submit',function(e){
    e.preventDefault();
    const elements = e.target.elements;
    const input=elements['search'].value;
    showData(input);
    window.scrollTo(0,600)

});


