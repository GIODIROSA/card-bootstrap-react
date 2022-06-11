import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "gio web 1",
    image: image1,
    text:"Contrary1 to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    url: "https://www.youtube.com/watch?v=VT5S9Y49SYs",
  },
  {
    id: 2,
    title: "gio web 2",
    image: image2,
    text:"Contrary2 to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    url: "https://www.youtube.com/watch?v=9Vxi4zODL78",
  },
  {
    id: 3,
    title: "gio web 3",
    image: image3,
    text:"Contrary3 to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    url: "https://www.youtube.com/watch?v=LDNBKff6g_E",
  },
];

function Cards() {
  //console.log(cards);
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} image={card.image} url={card.url} text={card.text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
