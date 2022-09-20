export default function Coupon() {
  return (
    <div className="col-lg-6" style={{ fontFamily: '"Montserrat"' }}>
      <div className="bg-light  px-4 py-3 text-uppercase font-weight-bold">
        Coupon code
      </div>
      <div className="p-4">
        <p className="font-italic mb-4">
          If you have a coupon code, please enter it in the box below
        </p>
        <div className="input-group mb-4 border rounded-pill p-2">
          <input
            type="text"
            placeholder="Apply coupon"
            aria-describedby="button-addon3"
            className="form-control border-0"
          />
          <div className="input-group-append border-0">
            <button
              id="button-addon3"
              type="button"
              className="btn btn-outline-dark  px-4 rounded-pill BookT "
            >
              <i className="fa fa-gift mr-2" />
              Apply coupon
            </button>
          </div>
        </div>
      </div>
      <div className="bg-light px-4 py-3 text-uppercase font-weight-bold">
        Instructions for seller
      </div>
      <div className="p-4">
        <p className="font-italic mb-4">
          If you have some information for the seller you can leave them in the
          box below
        </p>
        <textarea
          name="notice"
          cols={30}
          rows={2}
          className="form-control"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
