export function create(tag, content,attribute, parent){
  var tagName = document.createElement(tag);
  tagName.setAttribute("id", attribute);
  tagName.textContent = content;
  parent.appendChild(tagName);  
}