import {
  BadgeCheck,
  Brush,
  Camera,
  Gem,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench
} from "lucide-react";

export const contact = {
  name: "Ponkudam Gold & Diamond",
  brand: "PONKUDAM",
  descriptor: "GOLD & DIAMOND",
  location: "Pantheerankavu, Calicut, Kerala, India",
  shortLocation: "Pantheerankavu, Calicut",
  phone: "+91 6238 975 324",
  phoneHref: "tel:+916238975324",
  whatsappHref: "https://wa.me/916238975324",
  email: "ponkudam@gmail.com",
  emailHref: "mailto:ponkudam@gmail.com",
  website: "ponkudam.org",
  websiteHref: "https://ponkudam.org",
  instagram: "https://www.instagram.com/ponkudam?igsh=ZW9nNDBnZ2ZwdWMy",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Ponkudam%20Gold%20%26%20Diamond%2C%20Pantheerankavu%2C%20Calicut"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Collection", href: "#collection" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export const trustHighlights = [
  { title: "100% Hallmarked Jewellery", icon: ShieldCheck },
  { title: "Certified Diamonds", icon: Gem },
  { title: "Trusted Since Generations", icon: UsersRound },
  { title: "Exclusive Designs", icon: Sparkles }
];

export const collections = [
  {
    title: "Bridal Jewellery",
    description: "Traditional and contemporary pieces crafted for weddings and treasured ceremonies.",
    image: "/images/collection-bridal.png"
  },
  {
    title: "Gold Collection",
    description: "Elegant gold designs with refined detailing for every meaningful occasion.",
    image: "/images/about-bracelet.png"
  },
  {
    title: "Diamond Collection",
    description: "Radiant diamond jewellery selected for brilliance, clarity and timeless appeal.",
    image: "/images/hero-jewellery.png"
  },
  {
    title: "Everyday Elegance",
    description: "Light, graceful jewellery made for daily beauty and effortless sophistication.",
    image: "/images/craftsmanship.png"
  }
];

export const craftHighlights = [
  "Exceptional Craftsmanship",
  "Authentic Materials",
  "Personalised Service"
];

export const services = [
  {
    title: "Custom Jewellery Design",
    description: "Create a piece shaped around your style, story and celebration.",
    icon: Brush
  },
  {
    title: "Bridal Jewellery Consultation",
    description: "Choose wedding jewellery with calm, personal guidance from our team.",
    icon: HeartHandshake
  },
  {
    title: "Jewellery Repair & Care",
    description: "Refresh, restore and care for the jewellery you cherish.",
    icon: Wrench
  },
  {
    title: "Gold and Diamond Guidance",
    description: "Make confident choices with clear guidance on gold and diamonds.",
    icon: BadgeCheck
  }
];

export const footerContacts = [
  { label: contact.shortLocation, href: contact.directions, icon: MapPin },
  { label: contact.phone, href: contact.phoneHref, icon: Phone },
  { label: contact.email, href: contact.emailHref, icon: Mail },
  { label: contact.website, href: contact.websiteHref, icon: Gem }
];

export const socialLinks = [{ label: "Instagram", href: contact.instagram, icon: Camera }];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: contact.name,
  url: contact.websiteHref,
  email: contact.email,
  telephone: contact.phone,
  image: "https://ponkudam.org/images/hero-jewellery.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pantheerankavu",
    addressLocality: "Calicut",
    addressRegion: "Kerala",
    addressCountry: "IN"
  },
  sameAs: [contact.instagram]
};
