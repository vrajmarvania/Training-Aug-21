var express = require("express");
const OfferDomain = require("../domains/offer.domain");
var router = express.Router();
const offerDomain = new OfferDomain();
const {verifyToken,check_user} = require('../middelware/verify');


class OfferController {
    static async get(req, res) {
        offerDomain.getAllOffer(req, res);
      }
    static async insertOffer(req, res) {
        offerDomain.insertOffer(req, res);
      }
    static async getOffer(req, res) {
        offerDomain.getOffer(req, res);
      }
    static async updateOffer(req, res) {
        offerDomain.updateOffer(req, res);
      }
    static async deleteOffer(req, res) {
        offerDomain.deleteOffer(req, res);
      }
    static async active_Offers(req, res) {
        offerDomain.Active_Offers(req, res);
    }

}

//To get all employees
router.get("/getall", OfferController.get);
router.get("/Active_Offer", OfferController.active_Offers);
router.get("/:id", OfferController.getOffer);

router.post("/insertOffer",verifyToken,check_user, OfferController.insertOffer);
router.put("/updateOffer",verifyToken,check_user, OfferController.updateOffer);
router.delete("/:id",verifyToken,check_user, OfferController.deleteOffer);


module.exports = router;

// {
//     "Offer_id":"678",
//        "OfferName": "20% off",
//       "Offer_Start_Date":"2020-10-01",
//       "Offer_End_Date":"2020-10-19",
//       "Data": []
         
//      }