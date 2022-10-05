import "bootstrap/dist/css/bootstrap.min.css";
import Philip from "./Philips Milestone project.png";
import Navigation from "../components/navbar.js"


function Milestone() {
  return (
    <div>
<Navigation/>
            <img
              src={Philip}
              width="600"
              height="600"
              className="d-inline-block align-top"
              alt="Cool People logo"
            />
    </div>
  );
}

export default Milestone;