import type { Metadata } from "next";
import { ServiceHub, hubMetadata } from "@/components/site/service-hub";

export async function generateMetadata(props: PageProps<"/[locale]/alquiler">): Promise<Metadata> {
  return hubMetadata("rental", props.params);
}

export default async function RentalPage(props: PageProps<"/[locale]/alquiler">) {
  return <ServiceHub hub="rental" params={props.params} />;
}
