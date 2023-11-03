const RO_TOKEN = '0K0B0eSsRMFG2W6Z0373WHEY0yclehvX';

export const fetchWishilst = async () => {
  const response = await fetch('https://api.baserow.io/api/database/rows/table/214036/?user_field_names=true', {
    headers: {
      Authorization: `Token ${RO_TOKEN}`
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}