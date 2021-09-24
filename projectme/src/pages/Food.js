import React from "react";
import Footer from "../component/footer/Footers";
import Header from "../component/header/Header";

function Food() {
  return (
    <div>
      <Header />
      <section class="page2">
        <div class="imgpage2">
          <img src="./pic/food4lasagne-veg (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>lasagne&nbsp;veg</p>
            <p>
              89 &#3647; &nbsp;
              {/* <a style="font-size: 28px;" href="#" class="fas fa-cart-plus"></a> */}
            </p>
          </div>
        </div>
        <div class="imgpage2">
          <img src="./pic/food2Yakhni (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>Yakhni</p>
            <p>
              89 &#3647; &nbsp;{" "}
              {/* <a style="font-size: 28px;" href="#" class="fas fa-cart-plus"></a> */}
            </p>
          </div>
        </div>
        <div class="imgpage2">
          <img src="./pic/food3Lentil Koftas (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>Lentil&nbsp;Koftas</p>
            <p>
              89 &#3647; &nbsp;{" "}
              {/* <a style="font-size: 28px;" href="#" class="fas fa-cart-plus"></a> */}
            </p>
          </div>
        </div>
        <div class="imgpage2">
          <img src="./pic/food9Khao Pad (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>Khao&nbsp;Pad</p>
            <p>
              89 &#3647; &nbsp;{" "}
              {/* <a style="font-size: 28px;" href="#" class="fas fa-cart-plus"></a> */}
            </p>
          </div>
        </div>
        <div class="imgpage2">
          <img src="./pic/food6Tom Kha Ga (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>Tom&nbsp;Kha&nbsp;Ga</p>
            <p>
              89 &#3647; &nbsp;{" "}
              {/* <a style="font-size: 28px;" href="#" class="fas fa-cart-plus"></a> */}
            </p>
          </div>
        </div>
        <div class="imgpage2">
          <img src="./pic/food7Pad See Eiw (Custom).jpg" alt="" />
          <div class="textpage2">
            <p>Pad&nbsp;See&nbsp;Eiw</p>
            <p>
              89 &#3647; &nbsp;{" "}
              {/* <a style="font-size: 28px;" href="#" class="fas fa-cart-plus"></a> */}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Food;
