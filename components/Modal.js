import * as React from "react"

const Modal = ({ content, displayModal }) => {
  return (
    displayModal && (
    <div className="modal-container">
      <div className="modal-content">
        {content}
      </div>
    </div>
    )
  )
}

export default Modal
