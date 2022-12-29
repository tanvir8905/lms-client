import React from "react";
import { BsFillCameraVideoFill, BsFillShieldFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";

const Impact = () => {
  return (
    <div className="d-flex justify-content-evenly my-5">
      <div className="d-flex mx-5">
        <div>
          <p>
            <BsFillCameraVideoFill style={{ fontSize: "40px" }} />
          </p>
        </div>
        <div>
          <h4>8,000+ Courses</h4>
          <p>Explore a wide range of skills.</p>
        </div>
      </div>
      <div className="d-flex mx-3">
        <div>
          <p>
            <BsFillShieldFill style={{ fontSize: "40px" }} />
          </p>
        </div>
        <div>
          <h4>By Industry Experts</h4>
          <p>Professional development from the best people.</p>
        </div>
      </div>
      <div className="d-flex mx-3">
        <div>
          <p>
            <AiOutlineFieldTime style={{ fontSize: "40px" }} />
          </p>
        </div>
        <div>
          <h4>Unlimited Access</h4>
          <p>Unlock Library and learn any topic with one subscription.</p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
