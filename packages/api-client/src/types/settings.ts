type apiSettings = {
  endpoint: string;
  apiKey: string;
};

type cookies = {
  cartCookieName: string;
};

export type Settings = {
  api: apiSettings;
  cookies: cookies;
};
