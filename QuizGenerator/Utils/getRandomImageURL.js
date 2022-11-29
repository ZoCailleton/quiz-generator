import getRandomInt from './getRandomInt'

const getRandomImageURL = () => {
  let urls = [
    'https://images.pexels.com/photos/14428779/pexels-photo-14428779.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    'https://images.pexels.com/photos/13766972/pexels-photo-13766972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/10897657/pexels-photo-10897657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ]
  return urls[getRandomInt(0, urls.length-1)]
}

export default getRandomImageURL
