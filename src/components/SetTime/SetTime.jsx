/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

// import Button from '../Button';

const SetTime = (props) => {
  const {
    id, title, set, time,
  } = props;
  const handleDecrement = () => {
    set(time - 1);
  };
  const handleIncrement = () => {
    set(time + 1);
  };
  return (
    <div id={id}>
      <h3>{title}</h3>
      <button type="button" onClick={handleDecrement}>-</button>
      {time}
      <button type="button" onClick={handleIncrement}>+</button>
    </div>
  );
};

/*
const SetTime = (props) => {
  const { session, store } = props;
  const timeSet = session ? store.ses : store.brk;
  const timeInc = session ? store.sesInc : store.brkInc;
  const timeDec = session ? store.sesDec : store.brkDec;
  const name = session ? 'session' : 'break';
  const id = (val) => `${name}-${val}`;
  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <div id={name} className="col-sm-6">
      <h3 id={id('label')}>{`${capitalize(name)} Length`}</h3>
      <Button id={id('decrement')} onClick={timeDec}>
        -
      </Button>
      <div id={id('length')} style={{ display: 'inline' }}>
        {timeSet}
      </div>
      <Button id={id('increment')} onClick={timeInc}>
        +
      </Button>
    </div>
  );
};
*/

export default SetTime;
