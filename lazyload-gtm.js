var scriptAdded = false;

const GTM_ID = 'YOUR_GTM_ID';

window.addEventListener('scroll', function () {
  if (!scriptAdded) {
    var gtmScript = document.createElement('script');
    gtmScript.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
    gtmScript.async = true;

    gtmScript.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GTM_ID); // 설정한 ID 사용
    };

    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(gtmScript);
    scriptAdded = true;
  }
});
