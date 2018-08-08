/**!
 CATALOGUE EXPOSANTS
 Diverses fonctions pour le catalogue des exposants

 @contributors: Guillaume Bouillon (Agence'O)
 @date-created: 2016-10-27
 @last-update: 2016-10-27
 */

;(function ($) {

  /**
   * Positionne la colonne de droite au même niveau que le contenu.
   */
  function calcColPos() {
    if ($('.catalogue .layout-2-col').size() && $('.catalogue .mod-catal.edito').size()) {
      var layoutPosY = $('.catalogue .layout-2-col').offset().top;
      var blockPosY = $('.catalogue .mod-catal.edito').offset().top + $('.catalogue .mod-catal.edito').outerHeight();
      var posY = parseInt(blockPosY - layoutPosY);
      $('.catalogue .layout-2-col #zone3').css('padding-top', posY);
    }
  }

  /**
   * Wrap first word of main title
   */
  $('div:not(.catal-ex-details)').find('.mod-catal.edito h1').firstWord();

  /**
   * When dom ready
   */
  $(function () {
    $(window).resize();
  });

  /**
   * When window is resized or orientation change
   */
  $(window).resize(function () {
    calcColPos();
  });

})(jQuery);
