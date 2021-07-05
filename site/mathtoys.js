//// Copyright Crispin Perdue.  All rights reserved.

//// Support code for pages of mathtoys.org.

var Toy = Toy || {};

// Boilerplate text for the left navigation area.
//
Toy.navText = [
  '<a class=nav href="./">',
  'Home page</a>',
  '<a href="equations.html">Solving equations</a>',
  '<a href="simplify.html">Simplification</a>',
  '<a href="http://github.com/crisperdue/mathtoys"',
  ' target=_blank>GitHub project</a>',
  '<a href="http://prooftoys.org/">Prooftoys website</a>',
  '</ul>'
].join('\n');

Toy.insertNav = function() {
  var nav = document.getElementById('leftNav');
  if (nav) {
    nav.innerHTML = Toy.navText;
  }
};

// Matomo analytics support
//
var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension"
   should be called before "trackPageView" */
// Disable tracking cookies.
_paq.push(['disableCookies']);
// Or this line is probably sufficient:
// _paq.push(['requireCookieConsent']);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
// Disable recording with:
// _paq.push(['HeatmapSessionRecording::disable']);
(function() {
  var u="https://prooftoys.matomo.cloud/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  // ID 3 is for Mathtoys.org.
  _paq.push(['setSiteId', '3']);
  var d=document, g=d.createElement('script'),
    s=d.getElementsByTagName('script')[0];
  g.type='text/javascript';
  g.async=true;
  g.src='//cdn.matomo.cloud/prooftoys.matomo.cloud/matomo.js';
  s.parentNode.insertBefore(g,s);
})();
