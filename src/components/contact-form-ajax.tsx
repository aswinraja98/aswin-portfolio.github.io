import React, { useState } from "react";

export default function ContactFormAjax() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
    };
    try {
      const res = await fetch("https://formspree.io/f/mjkpyozk", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded bg-slate-800 text-white" />
        </div>
        <div className="flex-1">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded bg-slate-800 text-white" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea id="message" name="message" required className="w-full px-4 py-2 rounded bg-slate-800 text-white" rows={4}></textarea>
      </div>
      <button type="submit" className="px-6 py-2 bg-cyan-400 text-black rounded hover:bg-cyan-500 flex items-center gap-2" disabled={loading}>
        {loading ? "Sending..." : <>Send <span aria-label="mail">✉️</span></>}
      </button>
      {status === "success" && (
        <p className="text-green-500 mt-2">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
