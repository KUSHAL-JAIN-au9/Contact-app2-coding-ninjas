import React from "react";

const ModalBtnWrapper = ({ children, overlayMoadal }) => {
  return (
    <button
      type="button"
      class="hs-dropdown-toggle ml-5 inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
      data-hs-overlay={overlayMoadal}
    >
      {children}
    </button>
  );
};

export default ModalBtnWrapper;
