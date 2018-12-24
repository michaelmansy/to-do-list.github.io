// $("li").click(function(){
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration","line-through");
// });


//another way of styling li but with a single .css call
//syntax will be different since in js we cant have property names with a dash
//the if statement is to return to normal when clicked again
//note: colors are given with rgb system
// $("li").click(function(){
// 	//if it is black 
// 	if($(this).css("color") === "rgb(0,0,0)"){
// 		console.log("color is black");
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	//if it is gray
// 	}else{
// 		$(this).css({
// 			color: "pink",
// 			textDecoration: "none"
// 		});
// 	}

// });


// so a much easier way is by toggling the css class .completed
//no logic at all thats why this is easier
// $("li").click(function(){
// 	$(this).toggleClass("completed");
// });

// now since click() does not work with no li added from input
// we will use on() but code will change a bit 
// when an li is clicked inside this ul then do this code
// so the ul includes old li and new ones as well
//we do the same thing with the span also
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});



// click on X to delete a todo from the list
//the event object avoids event bubbling
//the parent means the li will be removed instead of the span
//since li is the parent of the span
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//add a listener to the text input using keypress or on
//need to get the code of the keys as well
// "enter key = 13" 
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//grabbing the new text and clearing the space
		var todoText = ($(this).val());
		$(this).val("");
		//adding it to our to do list
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"); 
	}
})



// when plus sign is clicked, fadeout the input section
//use a fadeToggle
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(1000);
})