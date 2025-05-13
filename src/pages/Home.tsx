import { useAppStore } from "../hooks/useStore";

export default function Home() {
  const count = useAppStore((state) => state.count);
  const increment = useAppStore((state) => state.increment);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">React Base com Zustand</h1>
      <p className="mt-4">Contador: {count}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={increment}
      >
        Incrementar
      </button>
    </div>
  );
}
