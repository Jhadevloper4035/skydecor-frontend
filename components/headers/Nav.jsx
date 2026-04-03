"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard1 from "../productCards/ProductCard1";
import {
  blogLinks,
  demoItems,
  otherPageLinks,
  otherShopMenus,
  productFeatures,
  productLinks,
  productStyles,
  shopFeatures,
  shopLayout,
  swatchLinks,
} from "@/data/menu";
import { usePathname } from "next/navigation";
export default function Nav() {
  const pathname = usePathname();
  return (
    <>


      <li className="menu-item">
        <a href="/" className="item-link">
          Home
        </a>
      </li>


      <li className="menu-item">
        <a href="/" className="item-link">
          About Us
        </a>
      </li>


      <li
        className={`menu-item ${[...productLinks, ...swatchLinks, ...productFeatures].some(
          (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
        )
          ? "active"
          : ""
          } `}
      >
        <a href="#" className="item-link">
          Our Range
          <i className="icon icon-arrow-down" />
        </a>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Products Layout</div>
                  <ul className="menu-list">
                    {productLinks.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${pathname.split("/")[1] == link.href.split("/")[1]
                          ? "active"
                          : ""
                          } `}
                      >
                        <Link href={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Colors Swatched</div>
                  <ul className="menu-list">
                    {swatchLinks.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${pathname.split("/")[1] == link.href.split("/")[1]
                          ? "active"
                          : ""
                          } `}
                      >
                        <Link href={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Products Features</div>
                  <ul className="menu-list">
                    {productFeatures.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${pathname.split("/")[1] == link.href.split("/")[1]
                          ? "active"
                          : ""
                          } `}
                      >
                        <Link
                          href={link.href}
                          className={`menu-link-text ${link.badge ? "position-relative" : ""
                            } `}
                        >
                          {link.name}
                          {link.badge && (
                            <div className="demo-label">
                              <span className="demo-new">{link.badge}</span>
                            </div>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="menu-heading">Best seller</div>
                <div className="sec-cls-header">
                  <div className="collection-position hover-img">
                    <Link href={`/shop-collection`} className="img-style">
                      <Image
                        className="lazyload"
                        data-src="/images/collections/cls-header.jpg"
                        alt="banner-cls"
                        src="/images/collections/cls-header.jpg"
                        width={300}
                        height={400}
                      />
                    </Link>
                    <div className="content">
                      <div className="title-top">
                        <h4 className="title">
                          <Link
                            href={`/shop-collection`}
                            className="link text-white wow fadeInUp"
                          >
                            Shop our top picks
                          </Link>
                        </h4>
                        <p className="desc text-white wow fadeInUp">
                          Reserved for special occasions
                        </p>
                      </div>
                      <div>
                        <Link
                          href={`/shop-collection`}
                          className="tf-btn btn-md btn-white"
                        >
                          <span className="text">Shop Now</span>
                          <i className="icon icon-arrowUpRight" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>



      <li className="menu-item">
        <a href="/" className="item-link">
          Career
        </a>
      </li>



      <li
        className={`menu-item position-relative ${[...otherPageLinks].some(
          (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
        )
          ? "active"
          : ""
          } `}
      >
        <a href="#" className="item-link">
          Resources
          <i className="icon icon-arrow-down" />
        </a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            {otherPageLinks.map((link, index) => (
              <li
                key={index}
                className={`menu-item-li ${pathname.split("/")[1] == link.href.split("/")[1]
                  ? "active"
                  : ""
                  } `}
              >
                <Link href={link.href} className="menu-link-text">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>



      <li className="menu-item">
        <a href="/" className="item-link">
          Blog
        </a>
      </li>



      <li className="menu-item">
        <a href="/" className="item-link">
          Conatct Us
        </a>
      </li>

    </>
  );
}
