export default class BandSelector extends React.Component {

  constructor() {
    this.state = { selected: 0 }
  }

  render() {
    var optionNodes = this.props.bandOptions.map((option) => {
      if (this.props.omitOptions.indexOf(option.value) === -1) {
        return <option key={option.value} value={option.value}>{option.label}</option>
      }
    })

    return (
      <div className="bandOption">
        <label>Band {this.props.band}</label>
        <select
          ref="menu"
          value={this.state.selected}
          onChange={this.handleChange.bind(this)}>
          {optionNodes}
        </select>
      </div>
    )
  }

  handleChange(e) {
    var newValue = this.refs.menu.getDOMNode().value

    this.setState({ selected: newValue })
    this.props.changeHandler(this.props.band - 1, newValue)
  }
}
