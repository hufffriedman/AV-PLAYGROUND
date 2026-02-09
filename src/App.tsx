import { useState } from "react";
import HandCam, { HandControls } from "./components/HandCam";

export default function App() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 12 }}>AV Playground</h1>

      <div style={{ marginBottom: 16 }}>
        <HandControls enabled={enabled} onToggle={setEnabled} />
      </div>

      <HandCam enabled={enabled} />
    </div>
  );
}
