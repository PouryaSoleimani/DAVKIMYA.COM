export const fallbackLng = "en";
export const languages = [fallbackLng, "de"];
export const defaultNS = "translation";
export const cookieName = "i18next";

const getOptions = (lng = fallbackLng, ns = defaultNS) => {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
};

export default getOptions;
