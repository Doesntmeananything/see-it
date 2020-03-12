import dynamic from "next/dynamic";

const MainStageDynamic = dynamic(
  () => import("../vis-components/MainStage").then(mod => mod.MainStage),
  {
    ssr: false
  }
);

const Home = () => <MainStageDynamic />;

export default Home;
