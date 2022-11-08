export default function reset (collection, className) {
  for(let elt of collection) {
    elt.classList.remove(className);
  }
}
