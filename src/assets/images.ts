// Centralized bundled image assets for CD Plumbing & Heating
// Using ES module imports ensures Vite bundles, hashes, and correctly paths all assets in production (Cloudflare Pages, GitHub, Vercel)
import heroImg from './images/hero_heating_engineer_1793303028101.jpg';
import plumbingImg from './images/service_plumbing_1793303028221.jpg';
import oilBoilerImg from './images/service_oil_boiler_1793303029253.jpg';
import installationsImg from './images/service_installations_1793303029798.jpg';
import repairsImg from './images/service_repairs_1793303030970.jpg';
import servicingImg from './images/service_servicing_1793303031092.jpg';
import emergencyImg from './images/service_emergency_1793303031791.jpg';
import featuredImg from './images/featured_heating_system_1793303033165.jpg';
import aboutImg from './images/about_plumber_lisburn_1793303032127.jpg';

export const siteImages = {
  hero: heroImg,
  plumbing: plumbingImg,
  oilBoiler: oilBoilerImg,
  installations: installationsImg,
  repairs: repairsImg,
  servicing: servicingImg,
  emergency: emergencyImg,
  featured: featuredImg,
  about: aboutImg,
};
