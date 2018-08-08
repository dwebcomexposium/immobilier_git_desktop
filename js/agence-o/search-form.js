/**!
 SEARCH FORM
 JS action for search form

 @contributors: Guillaume Bouillon (Agence'O)
 @date-created: 2016-11-10
 @last-update: 2016-11-10
 */

;(function ($) {

  var $formTrigger = $('.gsf-trigger');
  var $formTarget = $formTrigger.parent().find('.gsf-fields');

  $formTrigger.click(function (e) {
    e.preventDefault();
    $formTarget.toggle();
  });

})(jQuery);
