import React from "react";
import joelHeadshot from "../assets/JoelHiltonHeadshot.jpg";

const Home = () => {
  return (
    <div className="text-center">
      <h1>Welcome to Joel Hilton's Website</h1>
      <img src={joelHeadshot} alt="Joel Hilton" className="img-fluid" />
      <p>This site showcases Joel Hilton's podcasts and movie collection.</p>
    </div>
  );
};

export default Home;
