/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

// import Button from '../Button';

const buttonStyle = {
  width: '3rem',
  margin: '.25rem',
  borderRadius: '5px',
};

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
    <div
      id={id}
      style={{
        display: 'inline-block',
        margin: '1rem',
        textAlign: 'center',
        border: '2px solid black',
        width: '9rem',
      }}
    >
      <h6 id={id.concat('-label')}>{title}</h6>
      <div id={id.concat('-length')}>{time}</div>
      <div>
        <button
          id={id.concat('-decrement')}
          type="button"
          onClick={handleDecrement}
          style={buttonStyle}
        >
          -
        </button>
        <button
          id={id.concat('-increment')}
          type="button"
          onClick={handleIncrement}
          style={buttonStyle}
        >
          +
        </button>
      </div>
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
