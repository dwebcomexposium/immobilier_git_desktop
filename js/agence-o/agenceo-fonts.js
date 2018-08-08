WebFontConfig = {
  google: {
    families: [
      'Open+Sans:300,300i,400,400i,700,800',
      'Quicksand:300,400,700'
    ]
  }
};
(function () {
  var wf = document.createElement('script');
  wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
