export default function checkURLValidity(url, type) {

  if(url === undefined || type === undefined) return false;

  const photoExtensions = ['jpg', 'jpeg', 'png', 'webp'];

  if(type === 'photo') {
    let array = url.split('.')
    if(photoExtensions.includes(array[array.length-1])) {
      console.log(url)
    }
  }

}
