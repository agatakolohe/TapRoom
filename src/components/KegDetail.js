import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
      <h2>Name: {keg.name}</h2>
      <h3>Brand: {keg.brand}</h3>
      <h4>ABV: {keg.abv}</h4>
      <p>Price: {keg.price}</p>
      <h5>
        Pints Left in Keg:{" "}
        {keg.pintQuantity > 0 ? (
          keg.pintQuantity
        ) : (
          <div style={{ color: "red" }}>
            Can I kick it? (Yes, you can!) (Out of Stock)
          </div>
        )}
      </h5>
      <hr />
      <button
        class="btn btn-danger"
        onClick={() => props.onClickingDelete(keg.id)}
      >
        Delete Keg
      </button>
    </React.Fragment>
  );
}
KegDetail.propTypres = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default KegDetail;