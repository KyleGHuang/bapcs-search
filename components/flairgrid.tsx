import CPU from "../components/flairs/cpu";
import Cooler from "../components/flairs/cooler";
import GPU from "../components/flairs/gpu";
import Cables from "../components/flairs/cables";
import Case from "../components/flairs/case";
import Controller from "../components/flairs/controller";
import Expired from "../components/flairs/expired";
import Fan from "../components/flairs/fan";
import FlashDrive from "../components/flairs/flash-drive";
import HDD from "../components/flairs/hdd";
import Headphones from "../components/flairs/headphones";
import Mic from "./flairs/mic";
import Monitor from "./flairs/monitor";
import Mouse from "./flairs/mouse";
import Networking from "./flairs/networking";
import Prebuilt from "./flairs/prebuilt";
import PSU from "./flairs/psu";
import RAM from "./flairs/ram";
import SSDM2 from "./flairs/ssd-m.2";
import SSDSATA from "./flairs/ssd-sata";

export default function FlairGrid() {
  return (
    <div className="w-full grid grid-rows-4 grid-cols-5 gap-4 justify-center">
      <Cables></Cables>
      <Case></Case>
      <Controller></Controller>
      <Cooler></Cooler>
      <CPU></CPU>
      <Expired></Expired>
      <Fan></Fan>
      <FlashDrive></FlashDrive>
      <GPU></GPU>
      <HDD></HDD>
      <Headphones></Headphones>
      <Mic></Mic>
      <Monitor></Monitor>
      <Mouse></Mouse>
      <Networking></Networking>
      <Prebuilt></Prebuilt>
      <PSU></PSU>
      <RAM></RAM>
      <SSDM2></SSDM2>
      <SSDSATA></SSDSATA>
    </div>
  );
}
