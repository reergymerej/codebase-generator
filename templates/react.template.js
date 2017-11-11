/*
 * <%= filename %>
 * <%= filesPerDir %>
 */
import React from 'react'

<% imports.map(function (file) { %>
import Comp<%- file %> from './<%- file %>'
<% }); %>

class ThisThing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blah: 'bloo',
    }
  }

  render() {
    return (
      <div><%- filename %></div>
    )
  }
}

export default ThisThing
