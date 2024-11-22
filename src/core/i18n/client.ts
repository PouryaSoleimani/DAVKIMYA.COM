"use client";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useEffect, useState } from "react";
import { setCookie, getCookie } from "cookies-next";

import {
  UseTranslationOptions,
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import getOptions, { languages } from "./settings";
import { useLang } from "@/core/providers/langProvider";
import { persistKeys } from "../constants/persistKeys";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation(
  // lng: Language,
  // ns: string,
  options?: UseTranslationOptions<undefined>
) {
  const { lng } = useLang();

  const ret = useTranslationOrg("common", options);
  console.log(ret);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);

    useEffect(() => {
      if (getCookie(persistKeys.LANGUAGE) !== activeLng) return;
      setCookie(persistKeys.LANGUAGE, activeLng);
    }, [lng, activeLng]);
  }

  return ret;
}
