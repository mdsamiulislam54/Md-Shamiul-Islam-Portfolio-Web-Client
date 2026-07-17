"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { login } from "./_actions";

const LoginPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[a-zA-Z0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const password = code.join("");
  const router = useRouter();

  const handleSubmit = async () => {
    const password = code.join("");

    const res = await login(password);

    if (!res.success) {
      alert(res.message);
      return;
    }

    router.push("/admin");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Admin Login
        </h1>

        <p className="mb-8 text-center text-sm text-muted-foreground">
          Enter your 6-character admin password
        </p>

        <div className="flex justify-center gap-3">
          {code.map((value, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="password"
              inputMode="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="h-14 w-14 rounded-xl border text-center text-2xl font-bold outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          ))}
        </div>

        <button
          className="mt-8 w-full rounded-xl bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginPage;