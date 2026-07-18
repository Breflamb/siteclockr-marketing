"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  COUNTRIES,
  COUNTRY_LIST,
  DEFAULT_COUNTRY,
  type CountryCode,
  type CountryContent,
} from "@/lib/countries";
import { getMessages, HTML_LANG_BY_COUNTRY, type Messages } from "@/lib/i18n";

interface CountryContextValue {
  country: CountryCode;
  setCountry: (code: CountryCode) => void;
  c: CountryContent;
  m: Messages;
}

const CountryContext = createContext<CountryContextValue | null>(null);

const STORAGE_KEY = "siteclockr-country";

function DocumentLang({ country }: { country: CountryCode }) {
  useEffect(() => {
    document.documentElement.lang = HTML_LANG_BY_COUNTRY[country];
  }, [country]);
  return null;
}

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountryState] = useState<CountryCode>(DEFAULT_COUNTRY);

  useEffect(() => {
    let next: CountryCode | null = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && stored in COUNTRIES) next = stored as CountryCode;
    } catch {
      // ignore storage errors
    }
    if (next && next !== country) setCountryState(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCountry = (code: CountryCode) => {
    setCountryState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // ignore storage errors
    }
  };

  const m = getMessages(country);

  return (
    <CountryContext.Provider value={{ country, setCountry, c: COUNTRIES[country], m }}>
      <DocumentLang country={country} />
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry(): CountryContextValue {
  const ctx = useContext(CountryContext);
  if (!ctx) {
    return {
      country: DEFAULT_COUNTRY,
      setCountry: () => {},
      c: COUNTRIES[DEFAULT_COUNTRY],
      m: getMessages(DEFAULT_COUNTRY),
    };
  }
  return ctx;
}

export function CountrySelect({ className = "" }: { className?: string }) {
  const { country, setCountry, m } = useCountry();

  return (
    <label className={`relative inline-flex items-center ${className}`}>
      <span className="sr-only">{m.header.chooseCountry}</span>
      <svg
        aria-hidden
        className="pointer-events-none absolute left-2.5 h-4 w-4 text-muted"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </svg>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value as CountryCode)}
        className="cursor-pointer appearance-none rounded-lg border border-line bg-white py-2 pl-8 pr-8 text-sm font-medium text-ink transition-colors hover:border-brand focus:border-brand focus:outline-none"
      >
        {COUNTRY_LIST.map((item) => (
          <option key={item.code} value={item.code}>
            {item.flag} {item.label}
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        className="pointer-events-none absolute right-2.5 h-4 w-4 text-muted"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </label>
  );
}
