'use strict';

/** performs get request and returns a  */
async function getGif(event) {
  event.preventDefault();
  const ranNum = randomInt();
  const gifTerm = $('#gif-term').val();
  const params = new URLSearchParams(
    { q: gifTerm, api_key: `t0tue9BIc53NLhE4KaixTRC2pBVxLqRA`, limit: 1, offset: ranNum });

  // url https://api.giphy.com/v1/gifs/search
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?${params}`);
  const info = await response.json();
  const [imageURL] = info.data;//[{}]
  console.log(imageURL.images.original.url);

  console.log(
    "gify.api resp=", response, "info", info //why do literals not work
  );
  appendGif(imageURL.images.original.url);
}

/** Takes a image source and appends image to the .Gif-Area */
function appendGif(imageSrc) {
  const $gifArea = $('.Gif-area');
  $('<img>')
    .attr('src', `${imageSrc}`)
    .appendTo($gifArea);
}

/** gets random Integer between 250 */
function getRandomInt() {
  return Math.floor(Math.random() * 250);
}
// make some other functions



$('#gif-submit').on('click', getGif);