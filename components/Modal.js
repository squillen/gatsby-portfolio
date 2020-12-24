import * as React from "react"

const Modal = ({ content, displayModal, header, handleKeyDown = () => {} }) => {
  return (
    displayModal && (
    <div className="modal-container" onKeyDown={handleKeyDown}>
      {header && <h2 className="modal-header">{header}</h2>}
      <div className="modal-content">
        {content}
      </div>
    </div>
    )
  )
}

export default Modal
