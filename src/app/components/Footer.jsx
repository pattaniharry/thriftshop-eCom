import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <div className="footer  ">
        <div className="container">
          <div className="footer-wrapper pt-[80px] pb-[88px] flex justify-between">
            <div className="left-links flex ">
              <div className="w-[151px]">
                <h4>Shop</h4>
                <ul>
                  <li>
                    <Link href="/"> Shop All</Link>
                  </li>
                  <li>
                    <Link href="/">New</Link>
                  </li>
                  <li>
                    <Link href="/">Sale</Link>
                  </li>
                </ul>
              </div>
              <div className="w-[230px]">
                <h4> ThriftShop</h4>
                <ul>
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">How Selling Works</Link>
                  </li>
                  <li>
                    <Link href="/">Sell your items</Link>
                  </li>
                </ul>
              </div>
              <div className="w-[151px]">
                <h4>Help</h4>
                <ul>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                  <li>
                    <Link href="/">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="newsletter w-[404px]">
              <h4 className="pb-[20px]">Stay Tuned!</h4>
              <p>
                Sign up to our newsletter and stay up-to-date about new
                products, stories, and events.
              </p>
              <div className="for-input flex pt-[24px]">
                <input
                  type="email"
                  className="w-[100%] h-[48px] border-1 border-[#c6c6c6] px-[18px] focus-visible:border-color-[#c6c6c6]"
                  placeholder="Email"
                />
                <button className="primary-btn-blackNR rounded-none ">
                  {" "}
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
