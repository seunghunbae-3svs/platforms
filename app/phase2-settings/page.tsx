"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: 24 }}>
      <h1>User Settings</h1>
      <img src="/avatar.png" width={80} height={80} />
      <div
        onClick={() => setCount(count + 1)}
        style={{ background: "#222", color: "#999", padding: 8, cursor: "pointer", marginTop: 12 }}
      >
        Increment ({count})
      </div>
      <input type="email" placeholder="email" style={{ marginTop: 12, display: "block" }} />
      <a onClick={() => alert("hello")}>Open hello</a>
    </div>
  );
}
