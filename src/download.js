//todo replace with webextensions
export default (filename, base64) => {
  var element = document.createElement('a');
  element.setAttribute('href', makeDataURI(base64));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function makeDataURI(base64) {
  return `data:application/zip;base64,${base64}`;
}

