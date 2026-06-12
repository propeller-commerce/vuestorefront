import CookieUniversal from 'cookie-universal';

const baseSetCookieOptions = {
  sameSite: 'lax',
  path: '/',
};

const isBrowser = () => typeof window !== 'undefined';

export default (req, res) => {
  const cookie = isBrowser() ? CookieUniversal() : CookieUniversal(req, res);

  const set = (id, data, options = {}) => {
    cookie.set(id, data, {
      ...baseSetCookieOptions,
      ...options,
    });
  };

  const remove = (id, options = {}) => {
    cookie.remove(id, {
      ...baseSetCookieOptions,
      ...options,
    });
  };

  const get = (id, options = {}) =>
    cookie.get(id, {
      ...options,
    });

  return {
    set,
    remove,
    get,
  };
};
