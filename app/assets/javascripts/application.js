//= require jquery
//= require jquery_ujs
// require jquery.ui.all
//= require admin_invoices
//= require calendar
//= require comments
//= require css_browser_selector
//= require dashboard
//= require file_attachments
//= require schedule_modal
//= require chosen-jquery
//= require jquery.jeditable.js
// require bootstrap-tooltip
//= require bootstrap-dropdown
//= require highcharts.js
//= require exporting.js


// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(function() {
  //<% unless Rails.env.test? || Rails.env.cucumber? %>
  //  <% # only use chosen in dev r prod - it breaks cukes %>
  $(".chzn-select").chosen();
  //<% end %>
});
