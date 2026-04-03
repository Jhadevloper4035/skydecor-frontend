"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";

export default function ProductCard1({
  product,
  gridClass = "",
  parentClass = "card-product wow fadeInUp",
  isNotImageRatio = false,
  radiusClass = "",
}) {
  const imgSrc = product.images?.[0] || "/images/placeholder.jpg";
  const imgHover = product.images?.[1] || imgSrc;
  const productId = product._id || product.id;

  const [currentImage, setCurrentImage] = useState(imgSrc);

  const {
    addToCompareItem,
    isAddedtoCompareItem,
    setQuickViewItem,
  } = useContextElement();

  useEffect(() => {
    setCurrentImage(product.images?.[0] || "/images/placeholder.jpg");
  }, [product]);

  return (
    <div className={`${parentClass} ${gridClass}`}>
      <div
        className={`card-product-wrapper ${
          isNotImageRatio ? "aspect-ratio-0" : ""
        } ${radiusClass}`}
      >
        <Link
          href={`/product-detail/${product.productCodeSlug || productId}`}
          className="product-img"
        >
          <Image
            className="lazyload img-product"
            src={currentImage}
            alt={product.productName || product.designName || "Product"}
            width={600}
            height={800}
          />
          <Image
            className="lazyload img-hover"
            src={imgHover}
            alt={product.productName || product.designName || "Product"}
            width={600}
            height={800}
          />
        </Link>

        <div className="list-product-btn">
          {product.pdfUrlPath && (
            <a
              href={product.pdfUrlPath}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="box-icon btn-icon-action"
            >
              <i className="far fa-file-pdf" />
              <span className="tooltip">Download PDF</span>
            </a>
          )}
          <a
            href="#quickView"
            onClick={() => setQuickViewItem(product)}
            data-bs-toggle="modal"
            className="box-icon quickview tf-btn-loading"
          >
            <i className="far fa-eye" />
            <span className="tooltip">Quick View</span>
          </a>
          <a
            href="#compare"
            data-bs-toggle="offcanvas"
            aria-controls="compare"
            onClick={() => addToCompareItem(productId)}
            className="box-icon compare btn-icon-action"
          >
            <i className="fas fa-right-left" />
            <span className="tooltip">
              {isAddedtoCompareItem(productId) ? "Already compared" : "Compare"}
            </span>
          </a>
        </div>

        <div className="list-btn-main">
          <Link
            href={`/product-detail/${product.productCodeSlug || productId}`}
            className="btn-main-product"
          >
            View Product
          </Link>
        </div>
      </div>

      <div className="card-product-info">
        <Link
          href={`/product-detail/${product.productCodeSlug || productId}`}
          className="title link"
        >
          {product.productName}
        </Link>
        {product.designName && (
          <p className="text-caption-1 text-secondary">{product.productType} {product.category}</p>
        )}
       
      </div>
    </div>
  );
}
