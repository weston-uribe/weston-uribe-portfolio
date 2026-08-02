export function localizedGreeting(locale: string): string {
  if (locale === "es") {
    return "Hola";
  }
  if (locale === "en") {
    return "Hello";
  }
  return "";
}
