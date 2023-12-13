import type { Signal } from "@preact/signals";
import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  const text = useSignal("");
  const joke = async () => {
    const response = await fetch("http://localhost:8000/api/joke");
    text.value = await response.text();
  };

  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
      <Button onClick={() => joke()}>joke</Button>
      <p>{text}</p>
    </div>
  );
}
