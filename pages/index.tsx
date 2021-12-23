import Navbar from "../components/navbar";
import FlairGrid from "../components/flairgrid";

export default function Home() {
  return (
    <html lang="en-US">
      <head>
        <title>BAPCS Search</title>
      </head>
      <div className="w-screen h-screen flex flex-col justify-start items-center bg-white space-y-10 text-white">
        <Navbar></Navbar>
        <div className="w-4/6 border border-black/10 shadow-lg p-6 flex flex-col justify-start items-center bg-blue-600 space-y-10">
          <p className="text-xl">
            Click on a component to check the latest deals.
          </p>
          <FlairGrid></FlairGrid>
        </div>
      </div>
    </html>
  );
}
