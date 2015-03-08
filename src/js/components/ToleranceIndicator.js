export default class ToleranceIndicator extends React.Component {

  render() {
    return (
      <p className="toleranceValue">{this.printTolerance()}</p>
    );
  }

  printTolerance() {
    return this.props.tolerance === 0 ? "" : "±" + this.props.tolerance + "%"
  }
}
