import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          teamNumber: '',
          matchType: '',
          descending: '',
          cargoInSandstormCargoNotAccurate:'',
          cargoInSandstormCargoAccurate: '',
          cargoInSandstormCargoVeryAccurate: '',
          hatchInSandstormCargoNotAccurate: '',
          hatchInSandstormCargoAccurate:'',
          hatchInSandstormCargoVeryAccurate:'',
          cargoInSandstormRocketNotAccurate: '',
          cargoInSandstormRocketAccurate: '',
          cargoInSandstormRocketVeryAccurate: '',  
          hatchInSandstormRocketNotAccurate: '',
          hatchInSandstormRocketAccurate: '',
          hatchInSandstormRocketVeryAccurate: '',  
          hatchesInTeleOpCargo: '',
          cargoInTeleOpCargo: '',
          hatchesInTeleOpRocket: '',
          cargoInTeleOpRocket: '',
          highestRocketCargo: '',
          highestRocketHatch: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState ({
            teamNumber: '',
            matchType: '',
            descending: '',
            cargoInSandstormCargoNotAccurate: '',
            cargoInSandstormCargoAccurate: '',
            cargoInSandstormCargoVeryAccurate: '',
            hatchInSandstormCargoNotAccurate: '',
            hatchInSandstormCargoAccurate: '',
            hatchInSandstormCargoVeryAccurate: '',
            cargoInSandstormRocketNotAccurate: '',
            cargoInSandstormRocketAccurate: '',
            cargoInSandstormRocketVeryAccurate: '',
            hatchInSandstormRocketNotAccurate: '',
            hatchInSandstormRocketAccurate: '',
            hatchInSandstormRocketVeryAccurate: '',
            hatchesInTeleOpCargo: '',
            cargoInTeleOpCargo: '',
            hatchesInTeleOpRocket: '',
            cargoInTeleOpRocket: '',
            highestRocketCargo: '',
            highestRocketHatch: '',
        });
    }
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    Team# of robot observing:
                    <input
                        type='number'
                        id='teamNumber'
                        value={this.state.teamNumber}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    Match type:
                    <br />
                    Qualifications: <input
                        type='radio'
                        id='matchType'
                        name='matchType'
                        value='Qualifications'
                        onChange={this.handleChange}
                    />
                    <br />
                    Eliminations: <input
                        type='radio'
                        id='matchType'
                        name='matchType'
                        value='Eliminations'
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />Sandstorm
                    <br />
                    <br />
                    Descending:
                    <br />
                    Level 1: drove down ramp <input
                        type='radio'
                        id='descending'
                        name='descending'
                        value='Level 1'
                        onChange={this.handleChange}
                    />
                    <br />
                    Level 2: dropped off of platform <input
                        type='radio'
                        id='descending'
                        name='descending'
                        value='Level 2'
                        onChange={this.handleChange}
                    />
                    <br />
                    Did not make it out of HAB zone <input
                        type='radio'
                        id='descending'
                        name='descending'
                        value='Did not make it out of HAB'
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />Game Pieces
                    <br />
                    <br />
                    Cargo In Ship
                    <br />
                    Not Accurate-<input
                        type='checkbox'
                        id='cargoInSandstormCargoNotAccurate'
                        value='Not accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    Accurate-<input
                        type='checkbox'
                        id='cargoInSandstormCargoAccurate'
                        value='Accurate'
                        onChange={this.handleChange}
                    />
                    <br/>
                    Very Accurate-<input
                        type='checkbox'
                        id='cargoInSandstormCargoVeryAccurate'
                        value='Very Accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    Hatches On Ship
                    <br />
                    Not Accurate-<input
                        type='checkbox'
                        id='hatchInSandstormCargoNotAccurate'
                        value='Not Accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    Accurate-<input
                        type='checkbox'
                        id='hatchInSandstormCargoAccurate'
                        value='Accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    Very Accurate-<input
                        type='checkbox'
                        id='hatchInSandstormCargoVeryAccurate'
                        value='Very Accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    Cargo In Rocket
                    <br />
                    Not Accurate-<input
                        type='checkbox'
                        id='cargoInSandstormRocketNotAccurate'
                        value='Not accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    Accurate-<input
                        type='checkbox'
                        id='cargoInSandstormRocketAccurate'
                        value='Accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    Very Accurate-<input
                        type='checkbox'
                        id='cargoInSandstormRocketVeryAccurate'
                        value='Very Accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    Hatches On Rocket
                        <br />
                    Not Accurate-<input
                        type='checkbox'
                        id='hatchInSandstormRocketNotAccurate'
                        value='Not Accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    Accurate-<input
                        type='checkbox'
                        id='hatchInSandstormRocketAccurate'
                        value='Accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    Very Accurate-<input
                        type='checkbox'
                        id='hatchInSandstormRocketVeryAccurate'
                        value='Very Accurate'
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />Tele-Operated Period:
                    <br />
                    How many hatches on cargo ship?
                    <input
                        type='number'
                        id='hatchesInTeleOpCargo'
                        value={this.state.hatchesInTeleOpCargo}
                        onChange={this.handleChange}
                    />
                    <br />
                    How many cargo in cargo ship?
                    <input
                        type='number'
                        id='cargoInTeleOpCargo'
                        value={this.state.cargoInTeleOpCargo}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    How many hatches on rocket ship?
                    <input
                        type='number'
                        id='hatchesInTeleOpRocket'
                        value={this.state.hatchesInTeleOpRocket}
                        onChange={this.handleChange}
                    />
                    <br />
                    How many cargo in rocket ship?
                    <input
                        type='number'
                        id='cargoInTeleOpRocket'
                        value={this.state.cargoInTeleOpRocket}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    Highest Rocket Cargo<input
                        type='number'
                        id='highestRocketCargo'
                        value={this.state.highestRocketCargo}
                        onChange={this.handleChange}
                    />
                    <br />
                    Highest Rocket Hatch<input
                        type='number'
                        id='highestRocketHatch'
                        value={this.state.highestRocketHatch}
                        onChange={this.handleChange}
                    />
                    <br />
                        <input type='submit' value='Submit' />
                </form>
        );
    }
}

