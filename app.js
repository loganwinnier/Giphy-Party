'use strict';

/** performs get request and returns a  */
async function getGif(event) {
  event.preventDefault();

  const gifTerm = $('#gif-term').val();
  const params = new URLSearchParams(
    {q: gifTerm, api_key: `t0tue9BIc53NLhE4KaixTRC2pBVxLqRA`});

  // url https://api.giphy.com/v1/gifs/search
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?${params}`);

  const info = await response.json();
  console.log(info);
}

// make some other functions

$('#gif-submit').on('click', getGif);