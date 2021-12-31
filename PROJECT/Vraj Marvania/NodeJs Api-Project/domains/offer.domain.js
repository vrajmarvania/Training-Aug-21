const OfferModel = require("../models/offer.model");

class OfferDomain {
  // ===========================================================================
  //  get  All Offer
  // access:user & admin
  // ===========================================================================

  async getAllOffer(req, res) {
    const Offer = await OfferModel.find().populate("Data.Productid");
    if (Offer != "") {
      res.status(200).send(Offer);
    } else {
      res.status(404).send("Offer Not Found");
    }
  }
  // ===========================================================================
  //  get   Offer
  // access:user & admin
  // ===========================================================================

  async getOffer(req, res) {
    let id = req.params.id;
    const Offer = await OfferModel.find({ id: id, IsDeleted: false }).populate(
      "Data.Productid"
    );
    if (Offer != "") {
      res.status(200).send(Offer);
    } else {
      res.status(404).send("Offer Not Found");
    }
  }

  // ===========================================================================
  //  get Active All Offer
  // access:user & admin
  // ===========================================================================

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

  // ===========================================================================
  //  add new Offer
  // access: admin
  // input:--
  //   "id"
  //   "Offer_id
  //   "OfferName
  //   "Offer_Start_Date
  //   "Offer_End_Date
  //   "Offer_pct"0
  // ===========================================================================

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

  // ===========================================================================
  //  update Offer
  // access: admin
  // input:--
  //   "id"
  //   "Offer_id
  //   "OfferName
  //   "Offer_Start_Date
  //   "Offer_End_Date
  //   "Offer_pct"0
  // ===========================================================================

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
  // ===========================================================================
  //  delete Offer
  // access: admin
  // ===========================================================================

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
