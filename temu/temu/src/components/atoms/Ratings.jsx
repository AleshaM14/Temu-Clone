import React from "react";
import { FaStar } from "react-icons/fa";

const Stars = ({ rating }) => {
  return (
    <div className="Stars">
      {rating >= 1 && <FaStar style={{ color: "black" }} />} 
      {rating >= 2 && <FaStar style={{ color: "black" }} />}
      {rating >= 3 && <FaStar style={{ color: "black" }} />}
      {rating >= 4 && <FaStar style={{ color: "black" }} />}
      {rating >= 5 && <FaStar style={{ color: "black" }} />}
    </div>
  );
};

export default Stars;

//Each line checks: Is the rating big enough?
// If yes, show that star.
// If no, don’t show it.
// So rating = 3 → first three checks are true → three stars appear.
// rating = 5 → all five stars appear.