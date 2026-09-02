import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/lib/routes";
import { useSeo } from "@/hooks/useSeo";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useSeo({
    titleKey: "seo.notfound.title",
    descriptionKey: "seo.notfound.description",
    noindex: true,
  });


  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t("notfound.title")}</h1>
        <p className="mb-4 text-xl text-gray-600">{t("notfound.subtitle")}</p>
        <Link to={localizedPath("home")} className="text-blue-500 underline hover:text-blue-700">
          {t("notfound.button")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
