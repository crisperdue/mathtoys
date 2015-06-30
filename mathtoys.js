// Copyright 2011, 2012, 2013 Crispin Perdue.  All rights reserved.

// Boilerplate text for the left navigation area.
Toy.navText = [
  '<a class=nav href="./">',
  'Home page</a>',
  '<a href="simplify.html">Simplification</a>',
  '<a href="equations.html">Solving equations</a>',
  '<a href="http://github.com/crisperdue/mathtoys" target=_blank>',
  ' GitHub project</a>',
  '<a href="http://prooftoys.org/">Prooftoys website</a>',
  '</ul>'
].join('\n');

// Set the G+ inserter for Mathtoys.
Toy.insertGooglePlus = function() {
    var x =
      '<div class="g-community" ' +
      'data-href="https://plus.google.com/communities/114988124375826899091"' +
      'data-layout="landscape"></div>';
  $('body').prepend(x);
};

