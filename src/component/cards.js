import React from "react";

function Cards() {
  return (
    <>
      <div className="box1">
        <div className="card1">
          <div >
            <img
              className=" image"
              src="https://picsum.photos/200/300"
              alt="pic1"
            />
          </div>
          <div className="text">Card 1</div>
          <div className="text2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
            dolor sit.
          </div>
        </div>
        <div className="card2">
          <div >
            <img
              className=" image1"
              src="https://picsum.photos/200/300"
              alt="pic1"
            />
          </div>
          <div className="text">Card 2</div>
          <div className="text2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
            dolor sit.
          </div>
          <div className="buttonalign">
          <button className="button">Button 1 </button>
          <button className="button">Button 2 </button>
          <button className="button">Button 3 </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
