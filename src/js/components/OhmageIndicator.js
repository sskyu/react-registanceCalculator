export default class OhmageIndicator extends React.Component {

  render() {
    return (
      <p className="resistorValue">{this.printResistance()}</p>
    );
  }

  printResistance() {
    var resistance = parseFloat(this.props.resistance)

    if (resistance > 1000000) {
      return(resistance / 1000000).toFixed(1) + "MΩ"
    }

    if (resistance > 1000) {
      return (resistance / 100).toFixed(1) + "KΩ"
    }

    return resistance.toFixed(1) + "Ω"
  }
}
