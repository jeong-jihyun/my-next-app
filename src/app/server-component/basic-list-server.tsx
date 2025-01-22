import { Welcome } from "@/src/app/server-component/item-list-client";

function BasicList(){
    return (
        <>
            <Welcome name="Alice"/>
            <h5 className="text-xl font-bold">웹기본</h5>
            <h1 className="text-2xl font-bold">구성요소</h1>
        </>
    )
}

export default BasicList;