import * as React from "react"

const Modal = ({ content, displayModal, header }) => {
  return (
    displayModal && (
    <div className="modal-container">
      {header && <h2 className="modal-header">{header}</h2>}
      <div className="modal-content">
        {content}
      </div>
    </div>
    )
  )
}

export default Modal
