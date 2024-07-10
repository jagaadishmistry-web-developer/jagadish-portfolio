import FooterBar from "@/components/FooterBar";
import MyProject from "@/components/MyProject";
import TopBar from "@/components/TopBar";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";

const project = () => {
    return (
        <>
        <TopBar/>
        <div className="container mx-auto px-4 py-6">
            <Link className="text-2xl font-bold" href={"/"}>
            <div className="flex gap-1 items-center"><MdOutlineArrowBackIos className="pt-1"/>Back Home</div>
            </Link>
        </div>
        <p className="border-b"/>
            <MyProject/>
            <FooterBar/>
        </>
    );
}

export default project;