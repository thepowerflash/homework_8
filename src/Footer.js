import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://translated.turbopages.org/proxy_u/en-ru.ru.efc5a92a-65204dfd-5d4cbf5d-74722d776562/https/en.wikipedia.org/wiki/American_cities"> History of American cities</a>
        <a href="http://townevolution.ru/books/item/f00/s00/z0000031/st003.shtml">Urban design</a>
        <a href="https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA%D0%B0">
History of New York city</a>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" className="social-icon">
          <img src="https://w7.pngwing.com/pngs/561/460/png-transparent-fb-facebook-facebook-logo-social-media-icon.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" className="social-icon">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWYM9lUx_9rkFEsYzJ1FZ_ZpAzGXWPTB3Dg&usqp=CAU" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" className="social-icon">
          <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;