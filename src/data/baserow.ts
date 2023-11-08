const RO_TOKEN = 'YOUR_BASEROW_TOKEN';

export const fetchWishilst = async () => {
  const response = await fetch('https://api.baserow.io/api/database/rows/table/YOUR_BASEROW_ID/?user_field_names=true', {
    headers: {
      Authorization: `Token ${RO_TOKEN}`
    },
  });
  const data = await response.json();
  return data;
}