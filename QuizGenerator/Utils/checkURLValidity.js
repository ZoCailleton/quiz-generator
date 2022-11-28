export default function checkURLValidity({ url, type }) {

  if(url === undefined || type === undefined) return false;

  const photoExtensions = ['jpg', 'jpeg', 'png', 'webp'];
  const videoExtentions = ['mp4'];

  let array = url.split('.')

  if(type === 'photo') {
    if(photoExtensions.includes(array[array.length-1])) {
      console.log(url, 'photo')
    }
  }

  if(type === 'video') {
    if(videoExtentions.includes(array[array.length-1])) {
      console.log(url, 'vidéo')
    }
  }

}
