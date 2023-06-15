const databaseUrl = 'http://localhost:8000/';
const loginUrl = databaseUrl + 'user-auth/login/';
const registerUrl = databaseUrl + 'user-auth/register/';
const resetPasswordUrl = databaseUrl + 'user-auth/request-password-reset/';
const changeMailUrl = databaseUrl + 'user-auth/change-email/';
const changePasswordUrl = databaseUrl + 'user-auth/change-password/';
const usersUrl = databaseUrl + '/users/';
const adsUrl = databaseUrl + 'ads/';
const photoAlbumUrl = databaseUrl + 'photo-albums/';

const Database = {
  loginUrl,
  registerUrl,
  resetPasswordUrl,
  changeMailUrl,
  changePasswordUrl,
  usersUrl,
  adsUrl,
  photoAlbumUrl,
};

export default Database;
