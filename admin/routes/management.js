var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/product", function(req, res) {
  res.render("productPage", {
    title: "Black Hole Admin",
    user: {
      name: "Hoàng Đức Đạt",
      image:
        "https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC"
    },
    product: [
      {
        image:
          "https://images-na.ssl-images-amazon.com/images/I/A1cd6TMkAML._SL1500_.jpg",
        name: "Bóng rổ",
        number: 200,
        price: 3252351,
        brand: "coca-cola",
        id: 1
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/15/4f/1d/2ca8dd1db2bb31db0aba8ad4eac20160.jpg",
        name: "ÁO KHOÁC NHẸ NAM DXPECHER IN HÌNH HỌA TIẾT",
        number: 400,
        price: 135135,
        brand: "Phúc Long",
        id: 2
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/ad/6d/4b/698710c5a8a893767a67c6749bfbc06c.jpg",
        name: "Smart Tivi LG 43 inch 4K UHD 43UK6340PTF - Hàng chính hãng",
        number: 40,
        price: 43545,
        brand: "lol",
        id: 3
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/24/2c/7d/ed8eb31c8057f97c4391bfeaddcb3e86.jpg",
        name: "Xe Máy Honda Air Blade 2019 Phiên bản Đen Mờ",
        number: 12,
        price: 231052,
        brand: "EA",
        id: 4
      },
      {
        image:
          "https://salt.tikicdn.com/ts/bookpreview/90/5e/14080601/files/OEBPS/Images/Page1.jpg",
        name: "Sự kết thúc của thời đại giả kim",
        number: 1500,
        price: 223545,
        brand: "Ubisoft",
        id: 5
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/dc/56/c6/01f720494a321bacfd5711f03d8b5b25.jpg",
        name: "Giày Bóng Rổ Kyrie Ateson-2080",
        number: 800,
        price: 2354235,
        brand: "MS",
        id: 6
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/36/bd/31/38cfa79d6213fb948a13ad20b0b9d617.jpg",
        name: "Vòng đeo tay thông minh Xiaomi Mi Band 4_Hàng Nhập Khẩu",
        number: 750,
        price: 32325,
        brand: "RockStar",
        id: 7
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/cd/9b/3c/749a72eff516d0aaf0cf2f3a7f937682.jpg",
        name: "Ngũ Cốc Sấy Khô Calbee nội địa Nhật Bản 800g",
        number: 2000,
        price: 543626,
        brand: "FPT",
        id: 8
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/cb/79/ef/79d22f3ac2913afecbf8636e666ec5ac.jpg",
        name: "Chổi Lau Nhà Thông Minh, Chổi Lau Nhà Hút Bụi Đa Năng",
        number: 2400,
        price: 20000,
        brand: "FPT",
        id: 9
      }
    ]
  });
});

router.get("/product/modify", function(req, res) {
  res.render("productModify", {
    title: "Black Hole Admin",
    user: {
      name: "Hoàng Đức Đạt",
      image:
        "https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC"
    },
    product: {
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/15/4f/1d/2ca8dd1db2bb31db0aba8ad4eac20160.jpg",
      number: 200,
      brand: "coca-cola",
      name:
        "ÁO\xa0KHOÁC\xa0NHẸ\xa0NAM\xa0DXPECHER\xa0IN\xa0HÌNH\xa0HỌA\xa0TIẾT",
      type: "Thời\xa0trang",
      price: "89.000 ₫",
      description:
        "Chất\xa0vải\xa0dù\xa02\xa0lớp\xa0,\xa0dù\xa0dày\xa0đẹp\xa0,chống\xa0nắng\xa0chống\xa0mưa\xa0và\xa0chống\xa0lạnh\xa0tốt,\xa0đặc\xa0biệt\xa0không\xa0bao\xa0bụi\xa0,đường\xa0chỉ\xa0may\xa0tỉ\xa0mỉ\xa0chắc\xa0chắn.\xa0Thiết\xa0kế\xa0thời\xa0trang\xa0trẻ\xa0trung\xa0cho\xa0bạn\xa0một\xa0phong\xa0cách\xa0đầy\xa0năng\xa0động\xa0và\xa0cá\xa0tính.\xa0Thích\xa0hợp\xa0đi\xa0chơi\xa0,đi\xa0họ\xa0Dễ\xa0dàng\xa0phối\xa0đồ.\xa0Size\xa0:\xa02\xa0size\xa0m\xa0và\xa0l\xa0size\xa0m\xa0<54kg\xa0size\xa0l\xa0<64kg\xa0",
      id: 2
    }
  });
});

router.get("/brand", function(req, res) {
  res.render("brandPage", {
    title: "Black Hole Admin",
    user: {
      name: "Hoàng Đức Đạt",
      image:
        "https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC"
    },
    brand: [
      {
        image:
          "https://1.bp.blogspot.com/-tA-pZfn4MDk/Wf4Ikj8ZCmI/AAAAAAAAACo/7l363TnqeyUgSU7SL03qn9ZW5OihH9hFQCLcBGAs/s1600/All-Solution-BD-tech.jpg",
        name: "coca-cola",
        product: 23
      },
      {
        image:
          "https://1.bp.blogspot.com/-tA-pZfn4MDk/Wf4Ikj8ZCmI/AAAAAAAAACo/7l363TnqeyUgSU7SL03qn9ZW5OihH9hFQCLcBGAs/s1600/All-Solution-BD-tech.jpg",
        name: "coca-cola",
        product: 23
      },
      {
        image:
          "https://1.bp.blogspot.com/-tA-pZfn4MDk/Wf4Ikj8ZCmI/AAAAAAAAACo/7l363TnqeyUgSU7SL03qn9ZW5OihH9hFQCLcBGAs/s1600/All-Solution-BD-tech.jpg",
        name: "coca-cola",
        product: 23
      }
    ]
  });
});
router.get("/shopping", function(req, res) {
  res.render("shoppingPage", {
    title: "Black Hole Admin",
    user: {
      name: "Hoàng Đức Đạt",
      image:
        "https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC"
    },
    shopping: [
      {
        image:
          "https://images-na.ssl-images-amazon.com/images/I/A1cd6TMkAML._SL1500_.jpg",
        name: "Bóng rổ",
        type: "Thể thao",
        price: "209.000 ₫",
        number: 1,
        cancle: true,
        customer: "Hoàng Đức Đạt",
        brand: "Ubisoft",
        id: 1
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/15/4f/1d/2ca8dd1db2bb31db0aba8ad4eac20160.jpg",
        name: "ÁO KHOÁC NHẸ NAM DXPECHER IN HÌNH HỌA TIẾT",
        type: "Thời trang",
        price: "89.000 ₫",
        number: 12,
        cancle: true,
        customer: "Hoàng Đức Đạt",
        brand: "Ubisoft",
        id: 2
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/ad/6d/4b/698710c5a8a893767a67c6749bfbc06c.jpg",
        name: "Smart Tivi LG 43 inch 4K UHD 43UK6340PTF - Hàng chính hãng",
        type: "Điện tử",
        price: "7.990.000 ₫",
        number: 2,
        cancle: false,
        customer: "Hoàng Đức Đạt",
        brand: "Ubisoft",
        id: 3
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/24/2c/7d/ed8eb31c8057f97c4391bfeaddcb3e86.jpg",
        name: "Xe Máy Honda Air Blade 2019 Phiên bản Đen Mờ",
        type: "Phương tiện",
        price: "44.160.000 ₫",
        number: 5,
        cancle: true,
        customer: "Hoàng Đức Đạt",
        brand: "Ubisoft",
        id: 4
      },
      {
        image:
          "https://salt.tikicdn.com/ts/bookpreview/90/5e/14080601/files/OEBPS/Images/Page1.jpg",
        name: "Sự kết thúc của thời đại giả kim",
        type: "Sách",
        price: "107.602 ₫",
        number: 9,
        cancle: false,
        customer: "Hoàng Đức Đạt",
        brand: "Ubisoft",
        id: 5
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/dc/56/c6/01f720494a321bacfd5711f03d8b5b25.jpg",
        name: "Giày Bóng Rổ Kyrie Ateson-2080",
        type: "Thể thao",
        price: "450.000 ₫",
        number: 6,
        cancle: true,
        customer: "Hoàng Đức Đạt",
        brand: "Ubisoft",
        id: 6
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/36/bd/31/38cfa79d6213fb948a13ad20b0b9d617.jpg",
        name: "Vòng đeo tay thông minh Xiaomi Mi Band 4_Hàng Nhập Khẩu",
        type: "Phụ kiện - thiết bị số",
        price: "540.000 ₫",
        number: 1,
        cancle: false,
        customer: "Hoàng Đức Đạt",
        brand: "Ubisoft",
        id: 7
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/cd/9b/3c/749a72eff516d0aaf0cf2f3a7f937682.jpg",
        name: "Ngũ Cốc Sấy Khô Calbee nội địa Nhật Bản 800g",
        type: "Thực phẩm",
        price: "179.000 ₫",
        number: 1,
        cancle: true,
        customer: "Hoàng Đức Đạt",
        brand: "Ubisoft",
        id: 8
      },
      {
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/cb/79/ef/79d22f3ac2913afecbf8636e666ec5ac.jpg",
        name: "Chổi Lau Nhà Thông Minh, Chổi Lau Nhà Hút Bụi Đa Năng",
        type: "Nhà cửa - đời sống",
        price: "82.887 ₫",
        number: 1,
        cancle: true,
        customer: "Hoàng Đức Đạt",
        brand: "Ubisoft",
        id: 9
      }
    ]
  });
});

module.exports = router;
