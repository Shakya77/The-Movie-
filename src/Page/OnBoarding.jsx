import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";

export default function OnBoarding() {
    return (
        <div className="pl-4">
            <div className="py-3">
                <Link to="/home">
                    <h2 className="text-3xl font-bold">MovieHouse</h2>
                </Link>
            </div>
            <div className="flex gap-3 my-4">
                <input
                    type="text"
                    className="pl-3 border w-full sm:w-80 rounded-xl"
                    placeholder="Search..."
                />
                <button type="button" className="rounded-xl bg-blue-500 px-3 py-3 text-white">
                    <Icon icon="iconamoon:search-bold" style={{ fontSize: "1.5rem" }} />
                </button>
            </div>
            <div className="w-2/12">
                <p>
                    Top search:
                    One Piece
                    Fire Force Season 3
                    Solo Leveling Season 2: Arise from the Shadow
                    Wind Breaker Season 2
                    Fire Force
                    Devil may cry
                    The Apothecary Diaries Season 2
                    The Beginning After the End
                </p>
            </div>
            <Link to="/home" className="w-fit">
                <div className="flex items-center text-lg gap-4 font-bold bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition-colors w-fit mt-4">
                    View Full Site
                    <Icon icon="icons8:right-round" style={{ fontSize: "1.5rem" }} />
                </div>
            </Link>
        </div>
    )
}
