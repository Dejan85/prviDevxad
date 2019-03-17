import React from "react";

const Folders = ({ input, target }) => {
  return (
    <ul onClick={target} className="folder">
      <li>
        <i className="fas fa-folder" />
        <p>{input}</p>
      </li>
    </ul>
  );
};

export default Folders;
