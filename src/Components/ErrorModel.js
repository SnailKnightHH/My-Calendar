import "bootstrap/dist/css/bootstrap.css";
import "../css/errorModel.css";

const ErrorModel = (props) => {
  return (
    <div className="backdrop" onClick={props.onConfirm}>
      {" "}
      <div
        className="card model text-center"
        style={{ width: "22rem", zIndex: 100 }}
      >
        <div className="card-body">
          <h5 className="card-title">Error</h5>
          <p className="card-text">Input Field Cannot Be Empty</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={props.onConfirm}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModel;
