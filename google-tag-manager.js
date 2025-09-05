// Google Tag Manager - Main Script
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://signals.za-zu.com/85uvlhjgpwjt.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','41t5i=HQ5KNzMnRTg%2BOSUoPVwjSgJXRV5WTAwCSRAWXR0fRg8bBw%3D%3D');

// Google Tag Manager - Noscript Fallback
// This creates the noscript iframe for users with JavaScript disabled
document.addEventListener('DOMContentLoaded', function() {
  // Check if noscript iframe already exists
  if (!document.querySelector('noscript iframe[src*="signals.za-zu.com"]')) {
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://signals.za-zu.com/ns.html?id=GTM-TJSRXZ6K';
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    
    // Insert as the first child of body
    document.body.insertBefore(noscript, document.body.firstChild);
  }
});
