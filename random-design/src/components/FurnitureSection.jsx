import React from "react";

// imgs of the cards
import f1 from "../assets/imgs/f1.png";
import f2 from "../assets/imgs/f2.png";
import f3 from "../assets/imgs/f3.png";
import f4 from "../assets/imgs/f4.png";
import f5 from "../assets/imgs/f5.png";
import f6 from "../assets/imgs/f6.png";

function FurnitureSection() {
  let cards = [
    {
      img: f1,
      title: "BROWN CHAIR DESIGN",
      price: 100,
    },

    {
      img: f2,
      title: "DOUBLE BED DESIGN",
      price: 200,
    },
    {
      img: f3,
      title: "HOUSE CHAIR DESIGN",
      price: 75,
    },

    {
      img: f4,
      title: "BROWN TABLE DESIGN",
      price: 50,
    },

    {
      img: f5,
      title: "BLUE CHAIR DESIGN",
      price: 65,
    },
    {
      img: f6,
      title: "BROWN TABLE DESIGN",
      price: 90,
    },
  ];

  return (
    <section className="container my-4">
      <div>
        <h3 className="fw-bold">OUR FURNITURE</h3>
        <p>
          which don't look even slightly believable. If you are going to use a
          passage of Lorem Ipsum, you need to be sure there isn't an
        </p>
      </div>

      <div className="row">
        {cards.map((card) => {
          return (
            <>
              <div className="col-lg-4 col-md-6 mb-2 p-3">
                <div className="card border-0 furniture-card">
                  <div className="card-img">
                    <img src={card.img} className="img-fluid" alt="..." />
                  </div>
                  <div className="card-body">
                    <p className="card-title fs-5 ">{card.title}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fs-5">
                      <span className="text-main"> $ </span>
                      {card.price}
                    </p>
                    <a href="#" className="text-main text-decoration-none">
                      BUY NOW
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default FurnitureSection;
