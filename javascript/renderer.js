// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var render = (index) => document.write(
  '<div id=' + index + ' tabindex="' + index + '" class="item">' + index + '<img width="300"  src="http://cdn.wccftech.com/wp-content/uploads/2015/06/Dark-Souls-III-19.jpg"></div>'
)
var renderList = (index) => {
  document.write('<h4>PC</h4><div class="list">')
  for (var i = 0; i < 20; i++) {
    render((index * 20) + i);
  }
  document.write('</div>')
}
for (var i = 0; i < 10; i++) {
  renderList(i)
}

$(document).keydown(function (e) {
  var $current = $(":focus");
  switch (e.which) {
    case 37:
      $current.prev().focus();
      break;
    case 38:
      jFocus(e, $current.parent().prev().prev().children().first());
      break;
    case 39:
      $current.next().focus();
      break;
    case 40:
      jFocus(e, $current.parent().next().next().children().first());
      break;
    default:
      break;
  }
});

var cursorFocus = function (elem) {
  var x = window.scrollX,
    y = window.scrollY;
  elem.focus();
  window.scrollTo(x, y);
}

var anim = null;

var jFocus = function (e, $target) {
  if(!$target.parent().prev().offset()) {
    return;
  }
  e.preventDefault();
  if (anim === null) {
    anim = $('html, body').animate({
      scrollTop: $target.parent().prev().offset().top
    }, 160,  "swing", function () {
      anim = null;
      // Callback after animation
      // Must change focus!
      $target.focus();
      if ($target.is(":focus")) { // Checking if the target was focused
        return false;
      } else {
        console.warn("it should'n happen")
        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
        $target.focus(); // Set focus again
      };
    });
  } else {
    window.scrollTo(0, $target.parent().prev().offset().top);
  }
}