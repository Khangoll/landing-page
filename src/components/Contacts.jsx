import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  CheckCircle2,
  Phone,
} from "lucide-react";

const CONTACT = {
  email: "hanguri78@gmail.com",
  github: "https://github.com/Khangoll",
  phone: "86570815",
};

function Row({ icon: Icon, label, href, text, onCopy, copied }) {
  const content = (
    <span className="text-indigo-500 hover:underline break-all">{text}</span>
  );

  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 rounded-lg bg-indigo-500/10 p-2 ring-1 ring-white/10">
        <Icon size={18} className="text-indigo-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-zinc-300">{label}</div>
        <div className="mt-1 text-[15px]">
          {href ? (
            <a href={href} target="_blank" rel="noreferrer">
              {content}
            </a>
          ) : (
            content
          )}
        </div>
      </div>

      {/* copy email button */}
      {onCopy && (
        <button
          onClick={onCopy}
          className="ml-auto inline-flex items-center gap-1 rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-white hover:bg-white/10"
          aria-label="Copy email"
        >
          {copied ? (
            <>
              <CheckCircle2 size={14} /> Copied
            </>
          ) : (
            <>
              <Copy size={14} /> Copy
            </>
          )}
        </button>
      )}
    </div>
  );
}

const Contacts = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      console.log();
    }
  };

  return (
    <section id="contacts" className="relative w-full bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-zinc-900/60 p-6 md:p-8 ring-1 ring-white/10 shadow-xl">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Contact Information
          </h2>

          <div className="mt-6 grid gap-6">
            <Row
              icon={Mail}
              label="Email"
              text={CONTACT.email}
              onCopy={copyEmail}
              copied={copied}
            />
            <Row
              icon={Phone}
              label="Phone"
              href={CONTACT.phone}
              text="86570815"
            />
            <Row
              icon={Github}
              label="GitHub"
              href={CONTACT.github}
              text="github.com/Khangoll"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
