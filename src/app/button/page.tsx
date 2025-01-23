import {
  DefaultButton,
  ImportantButton,
  ReferenceButton,
} from "./various-button";

export default function Home() {
  return (
    <main className="flex flex-col p-4">
      <DefaultButton />
      <ImportantButton />
      <ReferenceButton />
    </main>
  );
}
