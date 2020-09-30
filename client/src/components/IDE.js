import React from 'react';

export default function IDE() {
  return (
    <div>
      <iframe
        src='https://ide.lutianyu.com/?ref=madewithvuejs.com#/'
        style={Istyle}
      ></iframe>
    </div>
  );
}

const Istyle = {
  width: '100%',
  height: '500px',
};
