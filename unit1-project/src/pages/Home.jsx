import React from "react";
import Gallery from "../components/Gallery";
import Form from "../components/Form";

function Home() {
  return (
    <div>
      <h2>The One Stop Shop</h2>
      <p>
        Welcome to your trusted partner for all things lawn care and property
        maintenance in the greater Indianapolis area. This company specializes
        in both residential and commercial services, ensuring your outdoor
        spaces are pristine year-round. Services include: Full Lawn Care
        Service: Mowing, edging, weeding, and pruning for a meticulously
        maintained lawn. Seasonal Cleanups: Spring and fall cleanup, yard
        cleanup, and general services to keep your property tidy. Beyond the
        Lawn: Land clearing, junk removal, window cleaning, and power washing
        for a complete property refresh.
      </p>

      <Form />
      <Gallery />
    </div>
  );
}

export default Home;
