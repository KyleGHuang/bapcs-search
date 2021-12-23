import Navbar from "../components/navbar";
import FlairGrid from "../components/flairgrid";

export default function Home() {
  return (
    <html lang="en-US">
      <head>
        <title>BAPCS Search</title>
      </head>
      <div className="w-screen h-screen flex flex-col justify-start items-center bg-blue-600 space-y-10 text-black">
        <Navbar></Navbar>
        <div className="w-4/6 border border-black/10 shadow-2xl p-6 flex flex-col justify-start items-center space-y-10 bg-white">
          <p className="text-xl">
            Click on a component to check the latest deals.
          </p>
          <div className="w-full text-white">
            <FlairGrid></FlairGrid>
          </div>
        </div>
        <div
          id="result"
          className="w-4/6 h-full flex flex-col justify-start items-center space-y-5"
        ></div>
      </div>
    </html>
  );
}
