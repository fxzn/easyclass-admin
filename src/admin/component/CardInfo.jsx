import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cardinfo.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function CardInfo() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4 content-card">
          <div className="col-sm-6 col-xl-4 ">
            <div className="card-info rounded d-flex align-items-center justify-content-between p-4">
              <FontAwesomeIcon icon={faUser} className="fa-3x icon-cardinfo" />
              <div className="ms-3 text-cardinfo">
                <p className="mb-2">Active Users</p>
                <h6 className="mb-0">450</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="card-info rounded d-flex align-items-center justify-content-between p-4">
              <FontAwesomeIcon icon={faUser} className="fa-3x icon-cardinfo" />
              <div className="ms-3 text-cardinfo">
                <p className="mb-2 ">Active Class</p>
                <h6 className="mb-0">25</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="card-info rounded d-flex align-items-center justify-content-between p-4">
              <FontAwesomeIcon icon={faUser} className="fa-3x icon-cardinfo" />
              <div className="ms-3 text-cardinfo">
                <p className="mb-2">Premium Class</p>
                <h6 className="mb-0">20</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
