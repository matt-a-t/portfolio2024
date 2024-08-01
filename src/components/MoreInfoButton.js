import React from 'react';

function MoreInfoButton({ link, onClick }) {
  function hanldeClick() {
    if (link) {
      window.location.href = link;
    } else {
      onClick();
    }
  }

  return (
    <button onClick={hanldeClick} className='text-green-900 underline p-2'>More info...</button>
  );
}

export default MoreInfoButton;