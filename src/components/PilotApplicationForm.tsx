"use client";

import { useState, useCallback } from "react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { Turnstile } from "@/components/Turnstile";

type Status = "idle" | "submitting" | "success" | "error";

interface Props {
  /** Vertical label sent in the application payload. */
  vertical: string;
  /** Optional hint copy under the form. */
  hint?: string;
}

export function PilotApplicationForm({ vertical, hint }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [equipment, setEquipment] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [cfToken, setCfToken] = useState<string | null>(null);
  const onVerifyTurnstile = useCallback((t: string) => setCfToken(t), []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setErrorMsg(null);
    setStatus("submitting");

    try {
      const res = await fetch("/api/pilots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          equipment,
          description,
          vertical,
          website,
          cfToken,
        }),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (res.status === 503) {
        // Email service not configured — open the user's mail client as a fallback.
        const mailto = buildMailto({
          name,
          email,
          company,
          role,
          equipment,
          description,
          vertical,
        });
        window.location.href = mailto;
        return;
      }

      setErrorMsg(data.error ?? "Something went wrong. Try again or email pilots@planara.com directly.");
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Try again or email pilots@planara.com directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-planara-teal/30 bg-planara-teal/[0.06] p-8">
        <div className="flex items-start gap-3 mb-3">
          <CheckCircle
            className="w-5 h-5 text-planara-teal shrink-0 mt-0.5"
            weight="duotone"
          />
          <div>
            <p className="text-base font-semibold text-white mb-2">
              We got your application.
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              We read every one. If we think there&apos;s a fit, we&apos;ll come
              back to you within a week. Confirmation is on the way to{" "}
              <span className="font-mono text-xs text-white/80">{email}</span>.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* Honeypot — hidden from real users, bots will fill it in */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            autoComplete="off"
          />
        </label>
      </div>

      <Field
        label="Your name"
        name="name"
        type="text"
        autoComplete="name"
        required
        value={name}
        onChange={setName}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={setEmail}
        placeholder="you@company.com"
      />
      <Field
        label="Company"
        name="company"
        type="text"
        autoComplete="organization"
        required
        value={company}
        onChange={setCompany}
      />
      <Field
        label="Your role"
        name="role"
        type="text"
        autoComplete="organization-title"
        required
        value={role}
        onChange={setRole}
        placeholder="e.g. service ops director, dealer principal, VP product"
      />
      <Field
        label="Equipment type"
        name="equipment"
        type="text"
        required
        value={equipment}
        onChange={setEquipment}
        placeholder="Specific platforms, models, or product families"
      />

      <div>
        <label
          htmlFor="description"
          className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2"
        >
          Brief description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What service problem are you trying to solve? What does success look like?"
          className="w-full bg-white/[0.04] border border-white/15 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-planara-teal/60 focus:outline-none focus:bg-white/[0.06] transition-colors"
        />
      </div>

      <Turnstile onVerify={onVerifyTurnstile} theme="dark" />

      {errorMsg && (
        <p className="text-sm text-amber-300/85 leading-relaxed">{errorMsg}</p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send application"}
          {status !== "submitting" && <ArrowRight className="w-4 h-4" />}
        </button>
        <p className="text-sm text-white/50">
          Or email{" "}
          <a
            href="mailto:pilots@planara.com"
            className="text-planara-teal hover:text-planara-teal/80 transition-colors underline underline-offset-4 decoration-planara-teal/40"
          >
            pilots@planara.com
          </a>{" "}
          directly.
        </p>
      </div>

      {hint && (
        <p className="text-xs text-white/40 leading-relaxed pt-2">{hint}</p>
      )}
    </form>
  );
}

function Field(props: {
  label: string;
  name: string;
  type: "text" | "email";
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2"
      >
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        autoComplete={props.autoComplete}
        required={props.required}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className="w-full bg-white/[0.04] border border-white/15 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-planara-teal/60 focus:outline-none focus:bg-white/[0.06] transition-colors"
      />
    </div>
  );
}

function buildMailto(fields: {
  name: string;
  email: string;
  company: string;
  role: string;
  equipment: string;
  description: string;
  vertical: string;
}): string {
  const subject = `[Pilot] ${fields.vertical} — ${fields.company}`;
  const body = [
    `Vertical: ${fields.vertical}`,
    `Name: ${fields.name}`,
    `Company: ${fields.company}`,
    `Role: ${fields.role}`,
    `Equipment: ${fields.equipment}`,
    `Email: ${fields.email}`,
    "",
    "Description:",
    fields.description,
  ].join("\n");
  return `mailto:pilots@planara.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
