const express = require('express');
const router = express.Router();

// /routes/goods.js
const products = [
    {
        productsId: 4,
      name: "챠오츄르",
      thumbnailUrl:
        "https://image.hnsmall.com/images/goods/417/21224417_g.jpg",
      category: "food",
      price: 1200,
    },
    {
        productsId: 3,
      name: "고양이폼조끼",
      thumbnailUrl:
        "https://m.petsy.kr/web/product/big/20200511/5e2f23494d6e3ede2ca36d0141d7d323.jpg",
      category: "cloth",
      price: 13000,
    },
    {
        productsId: 2,
      name: "고양이낚시대",
      thumbnailUrl:
        "https://img.catpre.com/mobile/catpre/product/15/14774_detailView_01818802.png",
      category: "toy",
      price: 5000,
    },
    {
        productsId: 1,
      name: "로얄캐닌",
      thumbnailUrl:
        "https://img.catpre.com/mobile/catpre/product/29/28957_detailView_01854446.png",
      category: "food",
      price: 62000,
    },
  ];

  
  router.get("/products", (req,res) => {
    res.status(200).json({"products":products})
  });

  module.exports = router;