export function saveGiftToStorage(gift: any) {
  localStorage.setItem("petalbloom_gift", JSON.stringify(gift));
}

export function loadGiftFromStorage() {
  const data = localStorage.getItem("petalbloom_gift");

  if (!data) return null;

  return JSON.parse(data);
}

export function clearGiftStorage() {
  localStorage.removeItem("petalbloom_gift");
}