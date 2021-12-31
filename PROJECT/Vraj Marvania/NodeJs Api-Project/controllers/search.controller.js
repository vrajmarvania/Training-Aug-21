var express = require("express");
const SearchDomain = require("../domains/search.domain");
var router = express.Router();
const searchDomain = new SearchDomain();
const {verifyToken,check_user} = require('../middelware/verify');

class SearchController {
    static async get(req, res) {
        searchDomain.getAllProduct(req, res);
      }
}

//To get all employees
router.get("/all", SearchController.get);
module.exports = router;



// {"Name": "BOAT Airdopes 121 v2",
// "Img": "https://utioutll.sirv.com/Smart%20Watches/1_1_19.png",
// "Dis": ["Upto 75% Off On Best Sellers"," Stylish dual tone finish"," Immersive, HD sound quality"],
// "Price": 999.00,
// "OldPrice":  2999.00,
// "CategoryName":"Top_Smart_Watches"
// }
