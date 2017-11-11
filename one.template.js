/*
 * <%= filename %>
 * <%= filesPerDir %>
 */

<% imports.map(function (file) { %>
const file<%- file %> = require('./<%- file %>')
<% }); %>

console.log('Look at this cool JS file! <%- filename %>')
