import React from 'react';
import './test.scss';

type Props = {greeting: string};

export default (props: Props) => (
  <div>
    <div className="test">
      test {props.greeting}
    </div>
  </div>
);
