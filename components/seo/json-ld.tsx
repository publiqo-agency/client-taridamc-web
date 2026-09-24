type Props = {
  data: object | object[];
};

/** Injects JSON-LD, escaping "<" so a value can never close the script tag. */
export function JsonLd({ data }: Props) {
  const json = JSON.stringify(Array.isArray(data) ? data : [data]).replace(
    /</g,
    "\\u003c",
  );
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
