const GREETINGS: Record<string, string> = {
  en: "Hello",
  es: "Hola",
};

export function localizedGreeting(locale: string): string {
  return GREETINGS[locale] ?? "";
}
