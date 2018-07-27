const resize = function (image, option) {
  var imageService = '//img2.storyblok.com/'
  var path = image.replace('//a.storyblok.com', '')
  console.log(path);
  return imageService  + option + '/smart' + path
}


export {resize};
