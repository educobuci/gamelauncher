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
      $current.parent().prev().prev().children().first().focus();
      break;
    case 39:
      $current.next().focus();
      break;
    case 40:
      $current.parent().next().next().children().first().focus();
      break;
    default:
      break;
  }
  // var index = $(":focus").index() + 1;
  // console.log(index);
  // if (e.which === 37) {
  //   $('div :nth-child(' + (index - 1) + ')').focus();
  // } else if (e.which === 39) {
  //   $('div :nth-child(' + (index + 1) + ')').focus();
  // }
});