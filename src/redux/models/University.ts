export interface University {
  id: string;
  name: string;
  tags: string[];
  logoURL: string;
  contacts: {
    email: string;
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
    };
  };
};

export type UniversityForRegistration = Omit<University, "id">;

export type UnivesityTags = {
  tags: string[];
};
