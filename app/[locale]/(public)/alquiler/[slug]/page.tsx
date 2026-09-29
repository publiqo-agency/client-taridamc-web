import type { Metadata } from "next";
import { ServicePage, serviceMetadata, serviceStaticParams } from "@/components/site/service-page";

export function generateStaticParams() {
  return serviceStaticParams("rental");
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/[locale]/alquiler/[slug]">): Promise<Metadata> {
  return serviceMetadata("rental", props.params);
}

export default async function RentalServicePage(props: PageProps<"/[locale]/alquiler/[slug]">) {
  return <ServicePage kind="rental" params={props.params} />;
}
