import type { Metadata } from "next";
import { ServicePage, serviceMetadata, serviceStaticParams } from "@/components/site/service-page";

export function generateStaticParams() {
  return serviceStaticParams("purchase");
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/[locale]/venta/[slug]">): Promise<Metadata> {
  return serviceMetadata("purchase", props.params);
}

export default async function SaleServicePage(props: PageProps<"/[locale]/venta/[slug]">) {
  return <ServicePage kind="purchase" params={props.params} />;
}
