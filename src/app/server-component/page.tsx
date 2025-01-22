import ItemList from "@/src/app/server-component/item-list-client";
import BasicList from "./basic-list-server";

export default function Home() {
  const items = ["Html", "Javascript", "CSS"];
  return (
    <main className="flex flex-col p-4">
      <BasicList></BasicList>
      <ItemList initalItems={items} />
    </main>
  );
}
