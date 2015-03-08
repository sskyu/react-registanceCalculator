import OhmageIndicator from './OhmageIndicator.js'
import ToleranceIndicator from './ToleranceIndicator.js'
import SVGResistor from './SVGResistor.js'
import BandSelector from './BandSelector.js'

export default class ResistanceCalculator extends React.Component {

  constructor() {
    this.bandOptions = [
      { value: 0,  tolerance: 0,    color: "black",   label: "None" },
      { value: 1,  tolerance: 1,    color: "brown",   label: "Brown" },
      { value: 2,  tolerance: 2,    color: "red",     label: "Red" },
      { value: 3,                   color: "orange",  label: "Orange" },
      { value: 4,                   color: "yellow",  label: "Yellow" },
      { value: 5,  tolerance: 0.5,  color: "green",   label: "Green" },
      { value: 6,  tolerance: 0.25, color: "blue",    label: "Blue" },
      { value: 7,  tolerance: 0.10, color: "violet",  label: "Violet" },
      { value: 8,  tolerance: 0.05, color: "grey",    label: "Grey" },
      { value: 9,                   color: "white",   label: "White" },
      { value: 10, tolerance: 5,    color: "#ffd700", label: "Gold" },
      { value: 11, tolerance: 10,   color: "#c0c0c0", label: "Silver" },
    ]

    this.state = {
      bands: [0, 0, 0, 0, 0],
      resistance: 0,
      tolerance: 0,
    }
  }

  render() {
    return (
      <div className="calculator">
        <OhmageIndicator resistance={this.state.resistance} />
        <ToleranceIndicator tolerance={this.state.tolerance} />
        <SVGResistor
          bandOptions={this.bandOptions}
          bands={this.state.bands} />
        <BandSelector
          bandOptions={this.bandOptions}
          omitOptions={[10, 11]}
          band={1}
          changeHandler={this.updateBandState.bind(this)} />
        <BandSelector
          bandOptions={this.bandOptions}
          omitOptions={[10, 11]}
          band={2}
          changeHandler={this.updateBandState.bind(this)} />
        <BandSelector
          bandOptions={this.bandOptions}
          omitOptions={[10, 11]}
          band={3}
          changeHandler={this.updateBandState.bind(this)} />
        <BandSelector
          bandOptions={this.bandOptions}
          omitOptions={[8, 9]}
          band={4}
          changeHandler={this.updateBandState.bind(this)} />
        <BandSelector
          bandOptions={this.bandOptions}
          omitOptions={[3, 4, 9]}
          band={5}
          changeHandler={this.updateBandState.bind(this)} />
      </div>
    );
  }

  updateBandState(band, value) {
    var state = this.state

    state.bands[band] = value
    state.resistance = this.calculateResistance()
    state.tolerance = this.calculateTolerance()

    this.setState(state)
  }

  calculateResistance() {
    var resistance = this.getBaseResistance() * this.getMultiplier()

    return resistance
  }

  calculateTolerance() {
    return this.bandOptions[this.state.bands[4]].tolerance
  }

  getBaseResistance() {
    return (100 * this.state.bands[0]) +
      (10 * this.state.bands[1]) + (1 * this.state.bands[2])
  }

  getMultiplier() {
    if (this.state.bands[3] == 10) {
      return 0.1
    }

    if (this.state.bands[3] == 11) {
      return 0.01
    }

    return Math.pow(10, this.state.bands[3])
  }
}
