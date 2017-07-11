const VISIBILITY_MARGIN = 50;
const ScrollDirection = {
  UP: Symbol("up"),
  DOWN: Symbol("down")
}

var render = (index) => document.write(
  '<div id=' + index + ' tabindex="' + index + '" class="item">' + index + '<img width="200"  src="http://cdn.wccftech.com/wp-content/uploads/2015/06/Dark-Souls-III-19.jpg"></div>'
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
      jFocus(e, $current.parent().prev().prev().children().first(), ScrollDirection.UP);
      break;
    case 39:
      $current.next().focus();
      break;
    case 40:
      jFocus(e, $current.parent().next().next().children().first(), ScrollDirection.DOWN);
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

var jFocus = function (e, $target, direction) {
  if (!$target.parent().prev().offset()) {
    return;
  }
  e.preventDefault();
  if (!anim) {
    var top = 0;
    let shouldScroll = ($(window).height() + window.scrollY) < ($target.outerHeight() + $target.offset().top)
      || $target.offset().top < window.scrollY;
    if (direction == ScrollDirection.DOWN) {
      top = Math.floor(($target.outerHeight() + $target.offset().top) - $(window).height()) +
        VISIBILITY_MARGIN;
    } else {
      top = $target.offset().top - VISIBILITY_MARGIN;
    }
    if (shouldScroll) {
      anim = $('html, body').animate({
        scrollTop: top
      }, 160, "swing", function () {
        anim = null;
        return eFocus($target)
      });
    } else {
      eFocus($target)
    }
  } else {
    window.scrollTo(0, $target.parent().prev().offset().top);
  }
}

var eFocus = ($target) => {
  $target.focus();
  if ($target.is(":focus")) { // Checking if the target was focused
    return false;
  } else {
    console.warn("it should'n happen")
    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
    $target.focus(); // Set focus again
  };
}