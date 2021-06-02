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

export const addToFavorites = async (id) => {
  const response = await fetch(`${process.env.BASE_URL}/favorites`, { 
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type':'application/jSON' },
    body: JSON.stringify({ 
      id,
    })
  });

  const result = await response.json();
  // console.log('addToFavorites', result);
  return  {
    id: result.id,
    placeId: result.place_id,
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
    wtf: true,
  };
};


export const getFavoritesList = async () => {
  const response = await fetch(`${process.env.BASE_URL}/favorites/all`, { 
    credentials: 'include', });

  const result = await response.json();
  // console.log('get favevoritesList', result);
  return result.map(fave => {
    return  {
      id: fave.id,
      placeId: fave.place_id,
      name: fave.name,
      description: fave.description,
      location: fave.location,
      image: fave.image,
      pool: fave.pool,
      wifi: fave.wifi,
      pricePerNight: fave.price_per_night,
      imageThumbnail: fave.image_thumbnail,
      maxGuests: fave.max_guests,
      petFriendly: fave.pet_friendly,
    }; 
  });

};

export const removeFavorite = async (id) => {
  const response = await fetch(`${process.env.BASE_URL}/favorites/remove`, { 
    credentials: 'include',
    method: 'DELETE',
    headers: { 'Content-Type':'application/jSON' },
    body: JSON.stringify({ 
      id,
    })
  });

  const result = await response.json();
  return result;
  // console.log('removeFavorite', result);
  // return  {
  //   id: result.id,
  //   placeId: result.place_id,
  //   name: result.name,
  //   description: result.description,
  //   location: result.location,
  //   image: result.image,
  //   pool: result.pool,
  //   wifi: result.wifi,
  //   pricePerNight: result.price_per_night,
  //   imageThumbnail: result.image_thumbnail,
  //   maxGuests: result.max_guests,
  //   petFriendly: result.pet_friendly,
  //   wtf: true,
  // };
};

// export const getPlaceAndAddToFavorites = (id, ((response) => console.log(response)) => {
//   const response = fetch(`${process.env.BASE_URL}/places/${id}`);

// };
