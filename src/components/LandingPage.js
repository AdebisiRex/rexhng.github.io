import React from "react";
import { Link } from "react-router-dom";
import slack from "./resources/image.png";
import github from "./resources/github.png";

import face from "./resources/face-card.png";

const LandingPage = () => {
  return (
    <>
      <div className="whole">
        <img alt="" src={face} width={200} id="profile_img" />{" "}
        <p className="m-0" id="twitter">rex_rachid</p>
        <p id="slack">AdebisiRex</p>
      </div>
      <hr />
      <div className="anchor">
        <a href="https://training.zuri.team/" id="btn_zuri">
          Zuri Team
        </a>
        <a href="https://books.zuri.team/" id="books">
          Zuri Books
        </a>

        <a
          title="This is a the easiest approach you'll find to learning Python
                Programing on the market"
          href="https://books.zuri.team/python-for-beginners?ref_id=AdebisiRex"
          id="btn_zuri"
        >
          Python Books
        </a>

        <a
          title="We offer an exclusive clearance to all our verified coders who
                have passed through extensive check-ups by our dexterous team,
                get yours?"
          href="https://background.zuri.team/"
          id="pitch"
        >
          background check for coders
        </a>

        <a
          title="Zuri is a team of verified proffesionals and we have this
                perfectly curate book for learning designs to ease your path"
          href="https://books.zuri.team/design-rules"
          id="bood_design"
        >
          Design Books
        </a>
        <Link to="/contact">Contact</Link>
      </div>

      <section>
        <img src={slack} alt="" width={35} />
        <img src={github} alt="" width={35} />
      </section>
    </>
  );
};

export default LandingPage;
