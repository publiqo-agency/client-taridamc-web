import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components";
import { SITE } from "@/lib/site";

/**
 * Notification the client receives for every form submission. Table-based
 * React Email, so it renders in every mail client. CLIENT-SKIN: recolour
 * with the brand once the palette exists; keep the field order in sync with
 * the text alternative in contacto/actions.ts.
 */
type Props = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  localeLabel: string;
  sentAt: string;
};

const label = { margin: 0, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase" as const, color: "#586676" };
const value = { margin: "4px 0 16px", fontSize: 16, color: "#0e2436" };

export function ContactNotification({ name, email, phone, service, message, localeLabel, sentAt }: Props) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{`${service} · ${name}`}</Preview>
      <Body style={{ margin: 0, backgroundColor: "#f4f2ec", fontFamily: "system-ui, sans-serif" }}>
        <Container style={{ margin: "32px auto", maxWidth: 560, backgroundColor: "#fbfaf7", padding: 32 }}>
          <Heading as="h1" style={{ margin: 0, fontSize: 22, color: "#07588c" }}>
            New contact — {SITE.name}
          </Heading>
          <Hr style={{ margin: "24px 0", borderColor: "#d8d5cb" }} />
          <Section>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
            <Text style={label}>Service</Text>
            <Text style={value}>{service}</Text>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
            <Text style={label}>Phone</Text>
            <Text style={value}>{phone || "—"}</Text>
            <Text style={label}>Language</Text>
            <Text style={value}>{localeLabel}</Text>
          </Section>
          <Hr style={{ margin: "8px 0 24px", borderColor: "#d8d5cb" }} />
          <Text style={label}>Message</Text>
          <Text style={{ ...value, whiteSpace: "pre-wrap" }}>{message}</Text>
          <Hr style={{ margin: "24px 0", borderColor: "#d8d5cb" }} />
          <Text style={{ margin: 0, fontSize: 13, color: "#586676" }}>
            Received {sentAt} from the website contact form. Reply to this email to answer the person directly.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
