import React from 'react';

export const ProcessBar: React.FunctionComponent<unknown> = (props) => {
 const [percent, setPercent] = React.useState(0);

 document.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const position = scrollTop / (scrollHeight - clientHeight);
  setPercent(position);
 });

 return (
  <>
   <div
    className="h-1 z-20 top-0"
    style={{
     background: '#4dc0b5',
     width: `${(percent * 100)}%`,
    }}
   ></div>
  </>
 );
};
