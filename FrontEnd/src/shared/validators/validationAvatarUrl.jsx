export const validationAvatarUrl = (url) => {
  const regex = /^(http|https):\/\/[^ "]+$/;
  return regex.test(url);