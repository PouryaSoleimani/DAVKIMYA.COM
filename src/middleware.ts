import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "@/core/i18n/settings";
import { setCookie } from "cookies-next";
import { persistKeys } from "./core/constants/persistKeys";

acceptLanguage.languages(languages);

const middleware = (req: NextRequest) => {
  const pathnameSplitted = req.nextUrl.pathname.split("/");
  const lngOfPathname = pathnameSplitted[1];

  const i18nCookieKey = persistKeys.LANGUAGE;
  const pathnameAfterLng = pathnameSplitted.slice(2).join("/");

  // if language was not in url -> set default language
  if (
    lngOfPathname.length > 2 ||
    (lngOfPathname !== "ru" &&
      lngOfPathname !== "en" &&
      lngOfPathname !== "tr" &&
      lngOfPathname !== "ar")
  ) {
    setCookie(i18nCookieKey, "en");
    return NextResponse.redirect(new URL(`/en/${pathnameAfterLng}`, req.url));
  }

  let lng = fallbackLng;
  if (req.nextUrl.pathname.startsWith("/de")) {
    lng = "tr";
  } else if (req.nextUrl.pathname.startsWith("/en")) {
    lng = "en";
  } else if (req.nextUrl.pathname.startsWith("/en")) {
    lng = "ar";
  } else if (req.nextUrl.pathname.startsWith("/en")) {
    lng = "ru";
  } else if (req.cookies.has(i18nCookieKey)) {
    lng = req.cookies.get(i18nCookieKey)?.value || fallbackLng;
  }

  setCookie(i18nCookieKey, lng);

  if (!languages.includes(lngOfPathname)) {
    return NextResponse.redirect(
      new URL(`/${lng}/${req.nextUrl.pathname}`, req.url)
    );
  }
};

export default middleware;

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
