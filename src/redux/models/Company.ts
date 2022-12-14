export interface Company {
  id: string;
  name: string;
  tags: string;
  logoUrl: string;
  contacts: {
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    zip: string;
    social_media?: {
      linkedin?: string;
      facebook?: string;
      twitter?: string;
      youtube?: string;
      instagram?: string;
      website?: string;
    };
  };
}

export interface CompanyForRegistration {
  name: string;
  tags: string[];
  logoUrl: string;
  contacts: {
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    zip: string;
    social_media?: {
      linkedin?: string;
      facebook?: string;
      twitter?: string;
      youtube?: string;
      instagram?: string;
      website?: string;
    };
  };
}
