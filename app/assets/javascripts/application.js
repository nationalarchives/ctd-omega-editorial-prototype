/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  var l = o.querySelectorAll('[data-module="moj-sortable-table"]');
t.nodeListForEach(l, (function(e) {
    new t.SortableTable({
        table: e
    })
})), l = o.querySelectorAll('[data-module="moj-sortable-table"]'), t.nodeListForEach(l, (function(e) {
    new t.SortableTable({
        table: e
    })
}))
})


