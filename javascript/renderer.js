// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var render = (index) => document.write(
  '<div tabindex="'+ index + '" class="item">' + index + '<img width="300"  src="http://cdn.wccftech.com/wp-content/uploads/2015/06/Dark-Souls-III-19.jpg"></div>'
)
var renderList = (index) => {
  document.write('<h4>PC</h4><div class="list">')
  for (var i = 0; i < 10; i++) {
    render((index * 10) + i);
  }
  document.write('</div>')
}
for (var i = 0; i < 10; i++) {
  renderList(i)
}