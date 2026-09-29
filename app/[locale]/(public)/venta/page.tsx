import type { Metadata } from "next";
import { ServiceHub, hubMetadata } from "@/components/site/service-hub";

export async function generateMetadata(props: PageProps<"/[locale]/venta">): Promise<Metadata> {
  return hubMetadata("sale", props.params);
}

export default async function SalePage(props: PageProps<"/[locale]/venta">) {
  return <ServiceHub hub="sale" params={props.params} />;
}
