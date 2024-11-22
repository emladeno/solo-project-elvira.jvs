var gallery;


gallery = ['https://i.ytimg.com/vi/sDpMIFDKUvM/maxresdefault.jpg', 'https://slowtravelblog.com/wp-content/uploads/2021/11/Communist_Buildings_Sofia.jpg', 'https://www.mappr.co/wp-content/uploads/2023/05/sofia-capital-of-bulgaria-location-576x384.jpg'];
let element_gallery = document.getElementById('gallery');
element_gallery.setAttribute("src", gallery[0]);


document.getElementById('next_img').addEventListener('click', (event) => {
  let element_gallery2 = document.getElementById('gallery');
  gallery.push(gallery.shift());
  let element_gallery3 = document.getElementById('gallery');
  element_gallery3.setAttribute("src", gallery[0]);

});

document.getElementById('previous_img').addEventListener('click', (event) => {
  let element_gallery4 = document.getElementById('gallery');
  gallery.unshift(gallery.pop());
  let element_gallery5 = document.getElementById('gallery');
  element_gallery5.setAttribute("src", gallery.slice(-1)[0]);

});