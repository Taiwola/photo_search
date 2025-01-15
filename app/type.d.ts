type Photo = {
  alt_description: string | null;
  alternative_slugs: {
    [key: string]: string; // e.g., 'en', 'es', 'ja', etc.
  };
  asset_type: string;
  blur_hash: string;
  breadcrumbs: string[]; // Assuming it's an array of strings
  color: string;
  created_at: string; // ISO date string
  current_user_collections: any[]; // Specify a more specific type if known
  description: string | null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  promoted_at: string | null; // ISO date string or null
  slug: string;
  sponsorship: null | Record<string, unknown>; // Adjust based on sponsorship structure if known
  topic_submissions: Record<string, unknown>; // Adjust if the structure is known
  updated_at: string; // ISO date string
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    updated_at: string; // ISO date string
    username: string;
    name: string;
    first_name: string;
    last_name: string | null;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string | null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
  };
  width: number;
};
