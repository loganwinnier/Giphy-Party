'use strict';

/** performs get request and returns a  */
async function getGif(event) {
  event.preventDefault();
  const gifTerm = $('#gif-term').val();
  const response = await fetch();
}

$('#gif-submit').on('click', getGif);