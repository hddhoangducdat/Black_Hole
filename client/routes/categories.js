var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/sport", function(req, res) {
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: [
      {
        image:
          "https://images-na.ssl-images-amazon.com/images/I/A1cd6TMkAML._SL1500_.jpg",
        name: "Bóng rổ",
        type: "Thể thao",
        price: "200 000 đ",
        id: 1
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/dc/56/c6/01f720494a321bacfd5711f03d8b5b25.jpg",
        name: "Giày Bóng Rổ Kyrie Ateson-2080",
        type: "Thể thao",
        price: "450.000 ₫",
        id: 6
      }
    ]
  });
});

router.get("/fashion", function(req, res) {
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: [
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/15/4f/1d/2ca8dd1db2bb31db0aba8ad4eac20160.jpg",
        name: "ÁO KHOÁC NHẸ NAM DXPECHER IN HÌNH HỌA TIẾT",
        type: "Thời trang",
        price: "89.000 ₫",
        id: 2
      }
    ]
  });
});

router.get("/electronic", function(req, res) {
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: [
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/ad/6d/4b/698710c5a8a893767a67c6749bfbc06c.jpg",
        name: "Smart Tivi LG 43 inch 4K UHD 43UK6340PTF - Hàng chính hãng",
        type: "Điện tử",
        price: "7.990.000 ₫",
        id: 3
      }
    ]
  });
});

router.get("/transport", function(req, res) {
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: [
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/24/2c/7d/ed8eb31c8057f97c4391bfeaddcb3e86.jpg",
        name: "Xe Máy Honda Air Blade 2019 Phiên bản Đen Mờ",
        type: "Phương tiện",
        price: "44.160.000 ₫",
        id: 4
      }
    ]
  });
});

router.get("/book", function(req, res) {
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: [
      {
        image:
          "https://salt.tikicdn.com/ts/bookpreview/90/5e/14080601/files/OEBPS/Images/Page1.jpg",
        name: "Sự kết thúc của thời đại giả kim",
        type: "Sách",
        price: "107.602 ₫",
        id: 5
      }
    ]
  });
});

router.get("/toolkit", function(req, res) {
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: [
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/36/bd/31/38cfa79d6213fb948a13ad20b0b9d617.jpg",
        name: "Vòng đeo tay thông minh Xiaomi Mi Band 4_Hàng Nhập Khẩu",
        type: "Phụ kiện - thiết bị số",
        price: "540.000 ₫",
        id: 7
      }
    ]
  });
});

router.get("/food", function(req, res) {
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: [
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/cd/9b/3c/749a72eff516d0aaf0cf2f3a7f937682.jpg",
        name: "Ngũ Cốc Sấy Khô Calbee nội địa Nhật Bản 800g",
        type: "Thực phẩm",
        price: "179.000 ₫",
        id: 8
      }
    ]
  });
});

router.get("/lifestyle", function(req, res) {
  res.render("categories", {
    title: "Black Hole",
    condition: false,
    carts: [
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/cb/79/ef/79d22f3ac2913afecbf8636e666ec5ac.jpg",
        name: "Chổi Lau Nhà Thông Minh, Chổi Lau Nhà Hút Bụi Đa Năng",
        type: "Nhà cửa - đời sống",
        price: "82.887 ₫",
        id: 9
      }
    ]
  });
});

module.exports = router;
