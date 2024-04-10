import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return <h1>{t("TITLE")}</h1>;
}
