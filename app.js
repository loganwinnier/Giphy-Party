'use strict';

const URL_BASE = 'https://api.giphy.com/v1/gifs/random?'
const API_KEY = `t0tue9BIc53NLhE4KaixTRC2pBVxLqRA`
const $gifArea = $('.Gif-area');


/** performs get request and returns a  */
async function getGif(event) {
  event.preventDefault();

  const gifTerm = $('#gif-term').val();
  const params = new URLSearchParams(
    { tag: gifTerm,
      api_key: API_KEY,
      limit: 1
    });

  const response = await fetch(`${URL_BASE}${params}`);

  const info = await response.json();

  console.log(`gify.api resp=`, response, `info`, info);

  const imageURL = info.data.images.original.url
  appendGif(imageURL);
}


/** Takes a image source and appends image to the .Gif-Area */
function appendGif(imageSrc) {
  $('<img>', {src: imageSrc}).appendTo($gifArea);
}


/** deletes all gifs from the gif area */
function deleteAllGifs() {
  $gifArea.empty();
}


$('#delete-gifs').on('click', deleteAllGifs);
$('#gif-submit').on('click', getGif);