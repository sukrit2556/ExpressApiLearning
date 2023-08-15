const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/Product.js");

router.get("/", (req, res, next) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      return next(err);
    });
});

router.get("/:id", (req, res, next) => {
  Product.findById(req.params.id)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      return next(err);
    });
});

router.put("/:id", (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      return next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Product.findByIdAndDelete(req.params.id)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      return next(err);
    });
});

router.post("/", async (req, res, next) => {
  try {
    const post = await Product.create(req.body);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
