import React from "react";
import MainProfile from "../images/MainProfile.jpg";
import {Link} from 'react-router-dom'

const Location = () => {
  return (
    <div className="App">
      <div className="ui center aligned middle aligned grid common-form location-selection">
        <div className="column">
          <h1 className="ui header orange-color">Welcome Andrew Adrian</h1>
          <br />
          <div className="imageParent">
            <img
              alt="Always Another Wave"
              src={MainProfile}
              className="ui centered image"
            />
          </div>
          <p>Choose Location</p>
          <br />
          <div className="row ">
            <div className="col-5 border p-5 mx-3 rounded shadow mb-5 locationclass">
            <Link to='/Dashboard'>
              <div>St. Pete Beach</div></Link>
            </div>
            <div className="col-5 border p-5 mx-3 rounded shadow mb-5 locationclass">
              <div>Carlsbad Shop</div>
            </div>
          </div>

          <div className="row ">
            <div className="col-5 border p-5 mx-3 rounded shadow mb-5 locationclass">
              <div>Encinitas Shop</div>
            </div>
            <div className="col-5 border p-5 mx-3 rounded shadow mb-5 locationclass">
              <div>Test location </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-5 border p-5 mx-3 rounded shadow mb-5 locationclass">
              <div>Test location 2</div>
            </div>
            <div className="col-5 border p-5 mx-3 rounded shadow mb-5 locationclass">
              <div>new location</div>
            </div>
          </div>
          <div className="row ">
            <div className="col-5 border p-5 mx-3 rounded shadow mb-5 locationclass">
              <div>Stripe</div>
            </div>
            <div className="col-5 border p-5 mx-3 rounded shadow mb-5 locationclass">
              <div>Stripe 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Location;
