import React from "react";

export type HandControlsProps = {
  enabled?: boolean;
  onToggle?: (next: boolean) => void;
};

export function HandControls({ enabled = true, onToggle }: HandControlsProps) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => onToggle?.(e.target.checked)}
        />
        Hand Tracking
      </label>
      <span style={{ opacity: 0.7, fontSize: 12 }}>
        (stub controls — wire into MediaPipe later)
      </span>
    </div>
  );
}

export type HandCamProps = {
  enabled?: boolean;
};

export default function HandCam({ enabled = true }: HandCamProps) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 12,
        padding: 16,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 8 }}>HandCam</div>
      <div style={{ opacity: 0.8, fontSize: 14 }}>
        {enabled ? "Ready (placeholder)" : "Disabled"}
      </div>

      {/* Replace this block with your actual webcam / MediaPipe canvas later */}
      <div
        style={{
          marginTop: 12,
          height: 220,
          borderRadius: 10,
          background: "rgba(255,255,255,0.06)",
          display: "grid",
          placeItems: "center",
          fontSize: 13,
          opacity: 0.75,
        }}
      >
        Webcam feed goes here
      </div>
    </div>
  );
}
