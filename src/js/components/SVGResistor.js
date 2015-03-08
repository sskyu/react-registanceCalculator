export default class SVGRegistor extends React.Component {

  render() {
    return (
      <svg width={300} height={100} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x={0} y={26} rx={5} width={300} height={7} fill="#d1d1d1" />
        <rect x={50} y={0} rx={15} width={200} height={57} fill="#fdf7eb" />
        <rect id="band1" x={70} y={0} rx={0} width={7} height={57} fill={this.valueToColour(this.props.bands[0])} />
        <rect id="band2" x={100} y={0} rx={0} width={7} height={57} fill={this.valueToColour(this.props.bands[1])} />
        <rect id="band3" x={130} y={0} rx={0} width={7} height={57} fill={this.valueToColour(this.props.bands[2])} />
        <rect id="band4" x={160} y={0} rx={0} width={7} height={57} fill={this.valueToColour(this.props.bands[3])} />
        <rect id="band5" x={210} y={0} rx={0} width={7} height={57} fill={this.valueToColour(this.props.bands[4])} />
      </svg>
    )
  }

  valueToColour(value) {
    return this.props.bandOptions[value].color
  }
}
