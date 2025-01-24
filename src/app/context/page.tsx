import {
  ContextClickCounter,
  ContextClickCounterMinus,
  CounterStatus,
} from "./context-click-counter";
import { CounterProvider } from "./counter-context";

export default function Page() {
  return (
    <CounterProvider>
      <main className="flex flex-col p-4 space-y-2">
        <h1 className="text-xl font-bold text-gray-400">
          리엑트 첫번째 컴포넌트
        </h1>
        <ContextClickCounter />
        <h1 className="text-xl font-bold text-gray-400">
          리엑트 두번째 컴포넌트
        </h1>
        <ContextClickCounterMinus />
        <h1 className="text-xl font-bold text-gray-400">
          리엑트 세번째 컴포넌트
        </h1>
        <CounterStatus />
      </main>
    </CounterProvider>
  );
}
