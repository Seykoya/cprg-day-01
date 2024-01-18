export default defineEventHandler((event) => {
  async function getDogData() {
    const res = fetch("https://dog.ceo/api/breeds/list/all");
    const dogData = await res.json();
    return dogData;
  }
  const data = getDogData();
  return data;
});
