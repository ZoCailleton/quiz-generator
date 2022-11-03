const createHTMLElement = (type, value, className) => {
  const elt = document.createElement(type);
  if(value != null) elt.innerHTML = value;
  if(className != null) elt.classList.add(className);
  return elt;
}

export default createHTMLElement;
