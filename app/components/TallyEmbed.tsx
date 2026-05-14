"use client";

import { useState } from "react";

export default function TallyEmbed({ formId, title }: { formId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {!loaded && (
        <div className="tally-loader">
          <div className="tally-loader-spinner" />
        </div>
      )}
      <iframe
        src={`https://tally.so/r/${formId}`}
        width="100%"
        height="100%"
        style={{
          border: "none",
          display: "block",
          minHeight: "100vh",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        title={title}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
