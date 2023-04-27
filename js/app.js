function w3_open() {
    document.getElementById("navmenu").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("navmenu").style.display = "none";
  }

window.onload = readMultipleNodesFromDatabase = () => {


$(function() {
    //hide first div or remove after append using `$(".card:first").remove()`
    $(".w3-card-2:first").hide()
    $(".hslides:first").hide()
    $.ajax({
      url: "https://nesreentittle.github.io/recipes.json",
      success: function(result) {
        $.each(result, function(index, item) {
          var cards = $(".w3-card-2:first").clone() //clone first divs
          var name = item.name;
          var ingredients = item.ingredients;
          var instructions = item.instructions;
          var imageurl = item.image;
          var prep = item.prep;
          var rating = item.rating;
          var cost = item.cost;
          //add values inside divs
          $(cards).find(".card-name").html(name);
          $(cards).find(".card-ingredients").html(ingredients);
          $(cards).find(".card-instructions").html(instructions);
          $(cards).find(".card-cost").html("$ "+ cost + " ");
          $(cards).find(".card-rating").html(rating + "/" + "10");
          $(cards).find(".card-prep").html(prep + " min  "+ " ");
          $(cards).find(".food-image").attr('src', imageurl);
          $(cards).show() //show cards
          $(cards).appendTo($(".recipe-grid")) //append to container
        });

        $.each(result, function(index, item) {
          var imageurl = item.image;
          //creates as img element and adds images from our json as source of each
          $('<img class="hSlides">').attr('src', imageurl).appendTo($(".slider"));
        });

      }
    });
  });

};

 var slideIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("hSlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }


function liveSearch() {
  // Locate the card elements
  let cards = document.querySelectorAll('.w3-card-2')
  // Locate the search input
  let search_query = document.getElementById("searchbox").value;
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if(cards[i].textContent.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
        // ...remove the `.is-hidden` class.
        cards[i].classList.remove("is-hidden");
    } else {
      // Otherwise, add the class.
      cards[i].classList.add("is-hidden");
    }
  }
}

//A little delay
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});
