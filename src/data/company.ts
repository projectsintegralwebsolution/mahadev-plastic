export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    taluka: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  workingHours: string;
  workingDays: string;
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    whatsapp: string;
  };
  googleMapsEmbed?: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Mahadev Plastic",
  tagline: "Leading Acrylic Sheet Manufacturer in India",
  phone: "+91 9987904482",
  phoneRaw: "919987904482",
  email: "mahadevplastic2019@gmail.com",
  address: {
    line1: "Plot No.94, Survey No.66",
    line2: "Achhad Industrial Estate",
    taluka: "Achhad Tah- Talasari",
    district: "Dist- Palghar",
    city: "Achhad",
    state: "Maharashtra",
    pincode: "401606",
    country: "India",
    full: "Plot No.94, Survey No.66, Achhad Industrial Estate, Achhad Tah- Talasari, Dist- Palghar - 401606, Maharashtra, India",
  },
  workingHours: "09:00 - 17:00",
  workingDays: "Monday to Sunday",
  social: {
    whatsapp: "https://wa.me/919987904482?text=Hello%20Mahadev%20Plastic,%20I%20am%20interested%20in%20your%20Acrylic%20Sheets.",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.2455416626244!2d72.9168632!3d20.1238013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be731a335361f21%3A0xfc815a96bc8679cc!2sMAHADEV%20PLASTIC!5e0!3m2!1sen!2sin!4v1790058282387!5m2!1sen!2sin",
};
