var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res) {
  res.render("userPage", {
    title: "Black Hole Admin",
    user: {
      name: "Hoàng Đức Đạt",
      image:
        "https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC"
    },
    people: [
      {
        name: "Hoàng Đức Đạt",
        address: "7A/102 Thành Thái",
        phone: "0981831448",
        sex: "nam",
        email: "hddhoangducdat@gmail.com",
        image:
          "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQmdBJELHSz5hbyrf5jAyenQB2WTTJAypPAREf_UF7EEZuj0bLjb_bxTmoFzWSiw_EE&_nc_ht=scontent.fsgn3-1.fna&oh=797d248960f52fb1734429caf319bbae&oe=5E19E9CC"
      },
      {
        name: "Hoàng Đức Đạt",
        address: "7A/102 Thành Thái",
        phone: "0981831448",
        sex: "nam",
        email: "hddhoangducdat@gmail.com",
        image:
          "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQmdBJELHSz5hbyrf5jAyenQB2WTTJAypPAREf_UF7EEZuj0bLjb_bxTmoFzWSiw_EE&_nc_ht=scontent.fsgn3-1.fna&oh=797d248960f52fb1734429caf319bbae&oe=5E19E9CC"
      },
      {
        name: "Hoàng Đức Đạt",
        address: "7A/102 Thành Thái",
        phone: "0981831448",
        sex: "nam",
        email: "hddhoangducdat@gmail.com",
        image:
          "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQmdBJELHSz5hbyrf5jAyenQB2WTTJAypPAREf_UF7EEZuj0bLjb_bxTmoFzWSiw_EE&_nc_ht=scontent.fsgn3-1.fna&oh=797d248960f52fb1734429caf319bbae&oe=5E19E9CC"
      },
      {
        name: "Hoàng Đức Đạt",
        address: "7A/102 Thành Thái",
        phone: "0981831448",
        sex: "nam",
        email: "hddhoangducdat@gmail.com",
        image:
          "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQmdBJELHSz5hbyrf5jAyenQB2WTTJAypPAREf_UF7EEZuj0bLjb_bxTmoFzWSiw_EE&_nc_ht=scontent.fsgn3-1.fna&oh=797d248960f52fb1734429caf319bbae&oe=5E19E9CC"
      }
    ]
  });
});

router.get("/modify", function(req, res) {
  res.render("userModify", {
    title: "Black Hole Admin",
    user: {
      name: "Hoàng Đức Đạt",
      image:
        "https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC"
    },
    customer: {
      name: "Hoàng\xa0Đức\xa0Đạt",
      address: "7A/102\xa0Thành\xa0Thái",
      phone: "0981831448",
      sex: "nam",
      email: "hddhoangducdat@gmail.com",
      image:
        "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQmdBJELHSz5hbyrf5jAyenQB2WTTJAypPAREf_UF7EEZuj0bLjb_bxTmoFzWSiw_EE&_nc_ht=scontent.fsgn3-1.fna&oh=797d248960f52fb1734429caf319bbae&oe=5E19E9CC"
    }
  });
});

module.exports = router;
