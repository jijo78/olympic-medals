import React from 'react';

const Error = ({msg}) => (
  <tr>
    <td className="error"> <span>Something went wrong. Error message: {msg}. Please refresh to try again.</span></td>
  </tr>
);

export default Error;