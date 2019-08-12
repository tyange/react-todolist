import React from "react";

function TodoModal(props) {
  const {
    modalStatus,
    clickedTodo,
    modalClose,
    handleDeleted,
    modalEdit
  } = props;
  const modalShowing = { display: "block" };
  const modalHiding = { display: "none" };
  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={modalStatus ? modalShowing : modalHiding}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={modalClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="font-weight-bold">{clickedTodo}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success text-white"
              onClick={modalEdit}
            >
              수정
            </button>
            <button
              type="button"
              className="btn btn-danger text-white"
              onClick={handleDeleted}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoModal;
