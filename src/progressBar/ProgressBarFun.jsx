import React from 'react';
import PropTypes from 'prop-types';
import {Label,ProgressBar,Button,Row,Col,Grid,FormGroup,FormControl} from 'react-bootstrap';

const barLimit = 500; // bar API limit

class ProgressBarFun extends React.Component {
  constructor(props) {
    super(props);

    this.handleProgressBarChange = this.handleProgressBarChange.bind(this);
    this.handleAddProgress = this.handleAddProgress.bind(this);
    this.addProgress = this.addProgress.bind(this);

    this.state = {
      optProgressBar: [],
      currProgressBarId: 0,
      bars: this.props.bars,
      barStyle: ['success','success','success'],
      buttons: this.props.buttons,
      optionList: [],
    }
  }

  componentDidMount() {
    var state = Object.assign({}, this.state);
    var optProgressBar = [];
    for (var i=0; i<state.bars.length; i++) {
      optProgressBar[i] = {id:i, displayName:'#progress'+(i+1)}
    }
    var optionList = optProgressBar.map((data) => {
                        return <option key={'optProgressBar'+data.id} value={data.id}>{data.displayName}</option>;
                      });
    this.setState({optProgressBar, optionList});
  }

  handleProgressBarChange(event) {
    event.preventDefault();
		const target = event.target;
		let value = target.value;
    var currProgressBarId = +value;
    this.setState({currProgressBarId});
  }

  handleAddProgress(event, buttonId) {
    event.preventDefault();
    this.addProgress(buttonId, this.state.buttons[buttonId]);
  }

  addProgress(id, value) {
    var currBarId = this.state.currProgressBarId;
    var newVal = this.state.bars[currBarId] + value;
    if (newVal > barLimit) newVal = barLimit;
    else if (newVal < 0) newVal = 0;
    var state = Object.assign({}, this.state);
    let bars = state.bars;
    let barStyle = state.barStyle;
    bars[currBarId] = newVal;
    if (newVal > 100) {
      barStyle[currBarId] = 'danger';
    } else {
      barStyle[currBarId] = 'success';
    }
    this.setState({bars, barStyle});
  }

  render() {
    return(
      <Grid>
        <h1>
          <Label>Progress Bars Demo</Label>{' '}
        </h1>
        { this.state.bars.map((value, idx) =>
            <Row key={'bars'+idx} className="show-grid">
              <Col xs={12} md={12}>
                <ProgressBar key={'progressBar'+idx} bsStyle={this.state.barStyle[idx]} className={'progressBar_'+idx} now={value>100?100:value} label={`${value}%`} />
              </Col>
            </Row>
          )
        }

        <Row>
        { this.state.optionList.length &&
            <Col xs={2} md={2}>
              <FormGroup controlId={'currProgressBarId'}>
                <FormControl 	componentClass="select"
                    value={this.state.currProgressBarId}
                    onChange={this.handleProgressBarChange}
                >
                  {this.state.optionList}
                </FormControl>
              </FormGroup>
            </Col>
          }
            <Col xs={10} md={10}>
                { this.state.buttons.map((value,index)=>
                    <Button key={'button'+index} onClick={(event)=>this.handleAddProgress(event, index)}>{value}</Button>
                  )
                }
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ProgressBarFun;

ProgressBarFun.propTypes = {
  bars: PropTypes.array,
  buttons: PropTypes.array,
  limit: PropTypes.string,

};
