$(document).ready( function(){

	/*Se esconde la flecha una vez que carga la pagina*/
	$(".js-back").hide('fast', function() {
	});

	/*Funcion para escribir un texto dentro de un div */
	function printsNew(){             
     var texto = document.createElement("p");
    texto.innerHTML = "NUEVA RECETAS";               
    $(".callout-news").append(texto);
	}
	printsNew();


/*	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

		recipesArray.forEach( function(valor, indice){
    	console.log("En el índice " + indice + " hay este valor: " + valor);
		});
*/

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/

	function renderHighlightedRecipes(recipesArray){
	 	recipesArray.forEach(function(cv){
	 		if(cv.highlighted == true){
	 		renderRecipe(cv);
	 		}
	 	})
		console.log('Recipes: ', recipesArray);
	};

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

	function renderRecipe(recipe){
		$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+ $(recipe).attr("title") +'</span><span class="metadata-recipe"><span class="author-recipe">' + $(recipe).attr("name") + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/"+ $(recipe).attr("name")+.jpg"></a>');
		console.log('Voy a pintar la receta', recipe);
}
	function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"

function renderActivity(recipe){

}
	
*/
});