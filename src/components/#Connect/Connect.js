import { connect } from 'react-redux';

import {
  brkInc,
  brkDec,
  sesInc,
  sesDec,
  tick,
  invTmr,
  invLaz,
  reset,
  runTimer,
} from '../../_actions';

const mapStateToProps = (state) => ({
  brk: state.brk,
  ses: state.ses,
  timeLeft: state.timeLeft,
  runTimer: state.runTimer,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  brkInc: () => dispatch(brkInc()),
  brkDec: () => dispatch(brkDec()),
  sesInc: () => dispatch(sesInc()),
  sesDec: () => dispatch(sesDec()),
  tick: (timeLeft) => dispatch(tick(timeLeft)),
  invTmr: () => dispatch(invTmr()),
  invLaz: () => dispatch(invLaz()),
  reset: () => dispatch(reset()),
  runTimer: () => dispatch(runTimer(ownProps)),
});

const Connect = (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);

export default Connect;
