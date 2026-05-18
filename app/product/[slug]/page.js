import { use } from "react";
import { notFound } from "next/navigation";
import CareoxProgramProduct from "@/app/ProductFortificationProgram";
import PrintableCalendarProduct from "@/app/ProductCareoxCalendar";
import LeatherJournalProduct from "@/app/ProductLeatherJournal";

const productComponents = {
  "careox-4-week-mental-health-fortification-program": CareoxProgramProduct,
  "careox-program-printable-calendar": PrintableCalendarProduct,
  "journal-mental-healthcare-leather-journal": LeatherJournalProduct,
};

export default function ProductPage({ params }) {
  const { slug } = use(params);
  const ProductComponent = productComponents[slug];
  if (!ProductComponent) notFound();
  return <ProductComponent />;
}