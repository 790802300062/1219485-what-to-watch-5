export const adaptFilmToClient = (filmData)=>{
  const film = {
    id: filmData.id.toString(),
    title: filmData.name,
    genre: filmData.genre.toLowerCase(),
    year: filmData.released,
    director: filmData.director,
    duration: filmData.run_time,
    starring: filmData.starring,
    description: filmData.description,
    background: filmData.background_image,
    backgroundColor: filmData.background_color,
    poster: filmData.poster_image,
    posterSmall: filmData.preview_image,
    videoSrc: filmData.video_link,
    previewVideo: filmData.preview_video_link,
    isFavorite: filmData.is_favorite
  };

  return film;
};

export const adaptReviewToClient = (reviewData)=>{
  const review = {
    id: reviewData.id.toString(),
    date: new Date(reviewData.date),
    author: reviewData.user.name,
    rating: reviewData.rating,
    text: reviewData.comment
  };

  return review;
};

export const adaptUserToClient = (userData)=>{
  const user = {
    id: userData.id.toString(),
    email: userData.email,
    name: userData.name,
    avatarSrc: userData.avatar_url,
  };

  return user;
};

