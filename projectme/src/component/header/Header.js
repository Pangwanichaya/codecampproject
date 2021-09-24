import React from "react";

function Header() {
  return (
    <div>
      <header class="header1">
        <div class="navstart">
          <ul>
            <img
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
              src="./pic/1.jpg"
              alt=""
            />
            <li class="current">
              <a href="./">หน้าแรก</a>
            </li>
            <li>
              <a href="./food.html">อาหาร</a>
            </li>
            <li>
              <a href="./pancake.html">แพนเค้ก</a>
            </li>
            <li>
              <a href="./drink.html">เครื่องดื่ม</a>
            </li>
            <li>
              <a href="./pomotion.html">โปรโมชั่น</a>
            </li>
            <li>
              <a href="./coupon.html">คูปอง</a>
            </li>
            <li>
              <a href="./feedback.html">ข้อเสนอแนะ</a>
            </li>
          </ul>
        </div>
        <div class="navright">
          <ul>
            <li>
              <a href="./register.html">ลงทะเบียน&nbsp;</a>/
              <a href="./login.html">&nbsp;เข้าสู่ระบบ</a>
            </li>
            {/* <a style={{ fontSize: "24px" }}>
              <i className="fas fa-shopping-basket"></i>
            </a> */}
          </ul>
        </div>
      </header>
      <header class="header2">
        <div id="navleft">
          <ul>
            <a href="./">
              <i className="fas fa-bars"></i>
            </a>
          </ul>
        </div>
        <div id="navcenter">
          <ul>
            <img
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
              src="./pic/1.jpg"
              alt=""
            />
          </ul>
        </div>
        <div id="navright">
          <ul>
            <li>
              <a href="./register.html">ลงทะเบียน&nbsp;</a>/
              <a href="./login.html">&nbsp;เข้าสู่ระบบ</a>
            </li>
            {/* <a
              style={{ fontsize: "24px" }}
              href={"./OrderSummary.html"}
              className="fas fa-shopping-basket"
            ></a> */}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
