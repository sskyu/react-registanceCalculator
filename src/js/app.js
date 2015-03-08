window.React = require('react')

import ResistanceCalculator from './components/ResistanceCalculator.js'

var calc = React.render(
  <ResistanceCalculator />,
  document.getElementById('container')
)
