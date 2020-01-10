const runTimer = (ownProps) => ({
  type: 'PLAY_PAUSE',
  payload: !ownProps.pause,
});

export default runTimer;
