import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "@/app/i18n/settings";
import { setCookie } from "cookies-next";

acceptLanguage.languages(languages);

const middleware = (req: NextRequest) => {
  const pathnameSplitted = req.nextUrl.pathname.split("/");
  const lngOfPathname = pathnameSplitted[1];
  const i18nCookieKey = "i18next";
  const pathnameAfterLng = pathnameSplitted.slice(2).join("/");

  if (
    lngOfPathname.length > 2 ||
    (lngOfPathname !== "de" && lngOfPathname !== "en")
  ) {
    setCookie(i18nCookieKey, "en");
    return NextResponse.redirect(new URL(`/en/${pathnameAfterLng}`, req.url));
  }

  let lng = fallbackLng;
  if (req.nextUrl.pathname.startsWith("/de")) {
    lng = "de";
  } else if (req.nextUrl.pathname.startsWith("/en")) {
    lng = "en";
  } else if (req.cookies.has(i18nCookieKey)) {
    lng = req.cookies.get(i18nCookieKey)?.value || fallbackLng;
  } else {
    lng = fallbackLng;
  }
  console.log(lng, "ssss");

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
