import { db } from "./database";

export function readAllAds(req, res) {
  res.status(200).json({ ads: db.readAllAds() });
}
export function readAllAdsFreshness(req, res) {
  setTimeout(() => res.status(200).json({ ads: db.readAllAds() }), 15 * 1000);
}
export function readAdById(req, res) {
  res.status(200).json({ ad: db.readById(req.params.id) });
}