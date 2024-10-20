//  ====================Local Storage Functions ====================
export const localStorageService = {
  // Get item from local storage
  getItem(key: string): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  },

  // Set item in local storage
  setItem(key: string, value: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  },

  // Remove item from local storage
  removeItem(key: string): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  },

  // Clear all items from local storage
  clear(): void {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  },
};

//  ====================Session Storage Functions ====================
export const sessionStorageService = {
  // Get item from session storage
  getItem(key: string): string | null {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(key);
    }
    return null;
  },

  // Set item in session storage
  setItem(key: string, value: string): void {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(key, value);
    }
  },

  // Remove item from session storage
  removeItem(key: string): void {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(key);
    }
  },

  // Clear all items from session storage
  clear(): void {
    if (typeof window !== "undefined") {
      sessionStorage.clear();
    }
  },
};

//  ====================Cookies Functions ====================

export const cookiesService = {
  // Get item from cookies
  getItem(key: string): string | null {
    if (typeof window !== "undefined") {
      return (
        document.cookie
          .split("; ")
          .find((cookie) => cookie.startsWith(key))
          ?.split("=")[1] || null
      );
    }
    return null;
  },

  // Set item in cookies
  setItem(key: string, value: string, days: number = 365): void {
    if (typeof window !== "undefined") {
      const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/`;
    }
  },

  // Remove item from cookies
  removeItem(key: string): void {
    if (typeof window !== "undefined") {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  },

  // Clear all items from cookies
  clear(): void {
    if (typeof window !== "undefined") {
      document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
    }
  },
};
