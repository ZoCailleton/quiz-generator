export default function checkURLValidity(url, type) {

  if(type === 'photo') {
    const regex = new RegExp('(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)');
    return regex.test(url);
  }

}
