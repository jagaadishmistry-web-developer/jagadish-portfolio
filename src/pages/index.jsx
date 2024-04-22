import FooterBar from "@/components/FooterBar";
import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Jagadish_Mistry / Portfolio</title>
      </Head>
      <TopBar />
      <NavBar />
      <FooterBar />
    </>
  );
};

export default index;
