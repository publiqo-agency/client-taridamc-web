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

const label = { margin: 0, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase" as const, color: "#6f6555" };
const value = { margin: "4px 0 16px", fontSize: 16, color: "#2b211a" };

export function ContactNotification({ name, email, phone, service, message, localeLabel, sentAt }: Props) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{`${service} · ${name}`}</Preview>
      <Body style={{ margin: 0, backgroundColor: "#f5efe8", fontFamily: "system-ui, sans-serif" }}>
        <Container style={{ margin: "32px auto", maxWidth: 560, backgroundColor: "#fbf8f4", padding: 32 }}>
          <Heading as="h1" style={{ margin: 0, fontSize: 22, color: "#2b211a" }}>
            New contact — {SITE.name}
          </Heading>
          <Hr style={{ margin: "24px 0", borderColor: "#ddd2c3" }} />
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
          <Hr style={{ margin: "8px 0 24px", borderColor: "#ddd2c3" }} />
          <Text style={label}>Message</Text>
          <Text style={{ ...value, whiteSpace: "pre-wrap" }}>{message}</Text>
          <Hr style={{ margin: "24px 0", borderColor: "#ddd2c3" }} />
          <Text style={{ margin: 0, fontSize: 13, color: "#6f6555" }}>
            Received {sentAt} from the website contact form. Reply to this email to answer the person directly.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
