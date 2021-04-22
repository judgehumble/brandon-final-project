'use strict';

$(document).ready( function () {
  $('#table_id').DataTable();
} );

// populate copyright in footer with current year
const copyrightYear = document.querySelector('.copyright-year');
const now = new Date();
copyrightYear.innerHTML = now.getFullYear();
