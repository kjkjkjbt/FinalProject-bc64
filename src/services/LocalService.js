const USER_LOGIN = "USER_LOGIN";

export const localService = {
  set: (account) => localStorage.setItem(USER_LOGIN, JSON.stringify(account)),
  get: () => JSON.parse(localStorage.getItem(USER_LOGIN)),
  remove: () => localStorage.removeItem(USER_LOGIN),
};

const DATA_FILTER = "DATA_FILTER";

export const dataService = {
  set: (data) => localStorage.setItem(DATA_FILTER, JSON.stringify(data)),
  get: () => JSON.parse(localStorage.getItem(DATA_FILTER)),
  remove: () => localStorage.removeItem(DATA_FILTER),
};
