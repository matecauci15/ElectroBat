export const initGTM = () => {
  const GTM_ID = 'GTM-ND3HX2DW'

  // Evitar cargar dos veces
  if (document.getElementById('gtm-script')) return

  // Insertar <script> en <head>
  const script = document.createElement('script')
  script.id = 'gtm-script'
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  `
  document.head.appendChild(script)

  // Insertar <noscript> en <body>
  const noscript = document.createElement('noscript')
  noscript.id = 'gtm-noscript'
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `
  document.body.prepend(noscript)
}
