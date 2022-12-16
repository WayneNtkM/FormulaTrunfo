import { node } from 'prop-types';
import React from 'react';

function Popup({ trigger, children }) {
  return (trigger) ? (
    <div>
      <div>
        { children }
      </div>
    </div>
  ) : '';
}

Popup.propTypes = {
  trigger: node.isRequired,
  children: node.isRequired,
};

export default Popup;
