import * as Tone from "tone" ;

export default function App() {
  const start = async () => {
    await Tone.start();

    const synth = new Tone.Synth().toDestination();

    new Tone.Loop((time) => {
      synth.triggerAttackRelease("C2", "8n", time);
    }, "4n").start(0);

    Tone.Transport.start();
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#0b0d10",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={start}
        style={{
          padding: 20,
          fontSize: 18,
          background: "#1a1f27",
          color: "white",
          border: "1px solid #333",
          borderRadius: 10,
        }}
      >
        ▶ Start Instrument
      </button>
    </div>
  );
}

