export default function StaticGymDemoFrame({ title, src }) {
  return (
    <main className="h-screen w-screen overflow-hidden bg-black">
      <iframe
        title={title}
        src={src}
        className="h-full w-full border-0"
        loading="eager"
      />
    </main>
  );
}
