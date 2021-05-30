export const bookReservation = async (place_id, start_date, end_date) => {
  const res = await fetch(`${process.env.BASE_URL}/bookings/create`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type':'application/jSON' },
    body: JSON.stringify({ 
      place_id, start_date, end_date 
    })
  });
  const json = await res.json();
  console.log(json);
  return json;
};
