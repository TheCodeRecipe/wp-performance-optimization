//lazy load adsense
var lazyloadad = false;
window.addEventListener("scroll", function() {
  if ((document.documentElement.scrollTop != 0 && lazyloadad === false) || (document.body.scrollTop != 0 && lazyloadad === false)) {
    (function() {
      var ad = document.createElement('script');
      ad.type = 'text/javascript';
      ad.async = true;
      ad.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
      ad.setAttribute('crossorigin', 'anonymous');
      var sc = document.getElementsByTagName('script')[0];
      sc.parentNode.insertBefore(ad, sc);
    })();

    lazyloadad = true;
  }
}, true);
