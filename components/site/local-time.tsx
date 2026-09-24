"use client";

import { useEffect, useState } from "react";
import { TIME_ZONE } from "./coords";

const format = () =>
  new Intl.DateTimeFormat("es-ES", { hour: "2-digit", minute: "2-digit", timeZone: TIME_ZONE }).format(new Date());

/**
 * Local time in Castelldefels. Rendered only after mount (the server's clock
 * would be a hydration mismatch and a lie cached at build time).
 */
export function LocalTime({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(format());
    update();
    const id = window.setInterval(update, 20_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={`tnum ${className}`} suppressHydrationWarning>
      {time ?? "--:--"}
    </span>
  );
}
