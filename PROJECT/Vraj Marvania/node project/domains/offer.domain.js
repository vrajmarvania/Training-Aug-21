const OfferModel = require("../models/offer.model");

class OfferDomain {
  // get All Offer-------------------------->
  async getAllOffer(req, res) {
    const Offer = await OfferModel.find().populate("Data.Productid");
    if (Offer != "") {
      res.status(200).send(Offer);
    } else {
      res.status(404).send("Offer Not Found");
    }
  }

  // get  Offer -------------------------->
  async getOffer(req, res) {
    let id = req.params.id;
    const Offer = await OfferModel.find({ _id: id, IsDeleted: false }).populate(
      "Data.Productid"
    );
    if (Offer != "") {
      res.status(200).send(Offer);
    } else {
      res.status(404).send("Offer Not Found");
    }
  }

  //get Active Offers data ------------------->
  async Active_Offers(req, res) {
    const data = await OfferModel.find({
      Offer_End_Date: { $gte: new Date() },
      Offer_Start_Date: { $lte: new Date() },
      IsDeleted: false,
    }).populate("Data.Productid");
    res.send(data);
    if (data != "") {
      res.status(200).send(data);
    } else {
      res.status(404).send("Offer Not Found");
    }
  }

  // insert Offer------------------------->
  async insertOffer(req, res) {
    let data = req.body;
    const Offer = new OfferModel(data);
    try {
      const result = await Offer.save();
      res.status(200).send(result);
    } catch (e) {
      res.send(e.message);
    }
  }

  // update Offer---------------------->
  async updateOffer(req, res) {
    let data = req.body;
    let id = req.body._id;
    const Offer = await OfferModel.find();
    let isAvail = Offer.find((e) => e.id == id);
    if (isAvail) {
      try {
        const result = await OfferModel.findByIdAndUpdate(
          id,
          { $set: data },
          { new: true }
        );
        res.status(200).send(result);
      } catch (e) {
        res.send(e.message);
      }
    } else {
      res.status(404).send("Offer Not Found");
    }
  }

  // delete Offer------------------------------->
  async deleteOffer(req, res) {
    let id = req.params.id;
    const Offer = await OfferModel.findByIdAndUpdate(id, { IsDeleted: true });
    if (Offer) {
      res.status(200).send("Offer  Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
}

module.exports = OfferDomain;
