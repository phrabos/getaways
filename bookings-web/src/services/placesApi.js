export const getPlaces = async () => {
  const response = await fetch(`${process.env.BASE_URL}/places`);
  if(response.ok) {
    const result = await response.json();
    return result.places.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        image: 'https://picsum.photos/400/250',
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};

export const getSinglePlace = async (id) => {
  const response = await fetch(`${process.env.BASE_URL}/places/${id}`);

  const result = await response.json();
  return  {
    id: result.id,
    name: result.name,
    description: result.description,
    location: result.location,
    image: result.image,
    pool: result.pool,
    wifi: result.wifi,
    pricePerNight: result.price_per_night,
    imageThumbnail: result.image_thumbnail,
    maxGuests: result.max_guests,
    petFriendly: result.pet_friendly,
  };
};
export const addToFavorites = async (id, isFavorite) => {
  const response = await fetch(`${process.env.BASE_URL}/places/${id}`, { 
    credentials: 'include',
    method: 'PUT',
    headers: { 'Content-Type':'application/jSON' },
    body: JSON.stringify({ 
      isFavorite,
    })
  });

  const result = await response.json();
  console.log(result);
  return  {
    id: result.id,
    name: result.name,
    description: result.description,
    location: result.location,
    image: result.image,
    pool: result.pool,
    wifi: result.wifi,
    pricePerNight: result.price_per_night,
    imageThumbnail: result.image_thumbnail,
    maxGuests: result.max_guests,
    petFriendly: result.pet_friendly,
  };
};

// export const getPlaceAndAddToFavorites = (id, ((response) => console.log(response)) => {
//   const response = fetch(`${process.env.BASE_URL}/places/${id}`);

// };
