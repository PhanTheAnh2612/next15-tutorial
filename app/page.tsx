import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("Hello NextJS");
  return <h1 className="text-3xl text-violet-700 font-black"></h1>;
}
