const Offer = require("../models/Offer");
const Customer = require("../models/Customer");
const Service = require("../models/Service");

class OfferService {
  static async createOffer(data) {
    const { customerId, serviceIds, offerDescription, offerPrice } = data;
    const customer = await Customer.findById(customerId);
    if (!customer) {
      throw new Error("Customer not found");
    }

    const services = await Service.find({ _id: { $in: serviceIds } });
    if (services.length !== serviceIds.length) {
      throw new Error("Some services not found");
    }

    const offer = new Offer({
      customer: customerId,
      services: serviceIds,
      offerDescription,
      offerPrice,
    });

    await offer.save();
    return { message: "Offer created successfully" };
  }

  static async getAllOffers() {
    const offers = await Offer.find().populate("customer services");
    return offers;
  }

  static async getOfferById(id) {
    const offer = await Offer.findById(id).populate("customer services");
    if (!offer) {
      throw new Error("Offer not found");
    }
    return offer;
  }

  static async updateOffer(id, data) {
    const { customerId, serviceIds, offerDescription, offerPrice } = data;

    const offer = await Offer.findById(id);
    if (!offer) {
      throw new Error("Offer not found");
    }

    if (customerId) {
      const customer = await Customer.findById(customerId);
      if (!customer) {
        throw new Error("Customer not found");
      }
      offer.customer = customerId;
    }

    if (serviceIds) {
      const services = await Service.find({ _id: { $in: serviceIds } });
      if (services.length !== serviceIds.length) {
        throw new Error("Some services not found");
      }
      offer.services = serviceIds;
    }

    offer.offerDescription = offerDescription || offer.offerDescription;
    offer.offerPrice = offerPrice || offer.offerPrice;

    await offer.save();
    return { message: "Offer updated successfully" };
  }

  static async deleteOffer(id) {
    const offer = await Offer.findByIdAndDelete(id);
    if (!offer) {
      throw new Error("Offer not found");
    }

    // await offer.remove();
    return { message: "Offer deleted successfully" };
  }
}

module.exports = OfferService;
