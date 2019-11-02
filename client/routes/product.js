var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("product", {
    title: "Black Hole",
    product: {
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/15/4f/1d/2ca8dd1db2bb31db0aba8ad4eac20160.jpg",
      name: "ÁO KHOÁC NHẸ NAM DXPECHER IN HÌNH HỌA TIẾT",
      type: "Thời trang",
      price: "89.000 ₫",
      description:
        "Chất vải dù 2 lớp , dù dày đẹp ,chống nắng chống mưa và chống lạnh tốt, đặc biệt không bao bụi ,đường chỉ may tỉ mỉ chắc chắn. Thiết kế thời trang trẻ trung cho bạn một phong cách đầy năng động và cá tính. Thích hợp đi chơi ,đi họ Dễ dàng phối đồ. Size : 2 size m và l size m <54kg size l <64kg ",
      id: 2,
      number: 1
    }
  });
});

module.exports = router;
