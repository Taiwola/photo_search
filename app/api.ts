const access_key = process.env.NEXT_PUBLIC_Access_Key;
const API_BASE_URL = "https://api.unsplash.com";

export const fetchSearchResults = async (searchTerm: string) => {
  const res = await fetch(
    `${API_BASE_URL}/search/photos?query=${searchTerm}&client_id=${access_key}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }
  const data = await res.json();
  return data;
};

export const fetchRandomResults = async () => {
  const res = await fetch(
    `${API_BASE_URL}/photos/random?count=10&client_id=${access_key}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }
  const data = await res.json();
  return data;
};
