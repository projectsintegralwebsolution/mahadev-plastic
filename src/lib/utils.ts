export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneNumber(phone: string) {
  return phone.replace(/[^0-9+]/g, "");
}
