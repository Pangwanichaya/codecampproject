import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <p style={{ margin: "10px" }}>Copyright &copy; 2021</p>
        <div class="iconfooter">
          <p>ติดต่อเรา</p>

          <ul>
            <li>
              <a href="">
                <i class="fas fa-phone-square"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fab fa-line"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
