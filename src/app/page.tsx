import { Fragment } from "react";
import Home from "./server-component/page";

export default function Page() {
  return (
    <Fragment>
      {/* <h1>Hello, Next.js</h1> */}
      <Home></Home>
      {/* <ItemList initalItems={items}></ItemList> */}
    </Fragment>
  );
}
