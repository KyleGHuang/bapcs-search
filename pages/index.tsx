import Navbar from "../components/navbar";
import CPU from "../components/flairs/cpu";
import Cooler from "../components/flairs/cooler";

export default function Home() {
  return (
    <html lang="en-US">
      <head>
        <title>BAPCS Search</title>
      </head>
      <div className="w-screen h-screen flex flex-col justify-start items-center bg-white space-y-10 text-white">
        <Navbar></Navbar>
        <div className="">
          </div>
      </div>
    </html>
  );
}
