// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked
$(document).ready(function () {
  $('.title').click(function (e) {
    e.stopImmediatePropagation();
    $(this).next('.description').slideToggle('slow');
  });




// 2. Remove each item when we click on the closing X

// removes each item, however it removes from bottom-up


  $('.close').click(function () {
    $(this).parent().parent().remove();
  });




// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items

  $('.add').click(function(e) {
    e.stopImmediatePropagation();
    var input = $('#newtitle').val();

    $('.item-list').append(
      '<div class="item">' +
        '<h1 class="title">'
          + input +
        '<span class="close">'+ 'x' +'</span>' +
      '</h1>' +
      '<p class="description">' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris id scelerisque lacus, rutrum lobortis nisl.Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.' +
      '</p>' +
      '</div>');


    // '<div class="item">'
    //   "<h1 class="title">" + input +
		// 			<span class="close">'"x"'</span>
    //   "</h1>"
    // '</div>'
  });






});

//    Optional:
//    If the user clicks "Add New" and the input is empty,
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page
