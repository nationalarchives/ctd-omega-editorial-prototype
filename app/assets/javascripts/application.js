/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  $('#selectAll').click(function() {
    if (this.checked) {
        $(':checkbox').each(function() {
            this.checked = true;                        
        });
    } else {
       $(':checkbox').each(function() {
            this.checked = false;                        
        });
    } 
 });
})


