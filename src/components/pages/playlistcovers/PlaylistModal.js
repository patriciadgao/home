import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";

Modal.defaultStyles.overlay.backgroundColor = "#ffffff80";
Modal.setAppElement("body");

export function PlaylistModal() {
    const params = useParams();
    let { "*": playlistNumber } = params;
    const navigate = useNavigate();
    const nextPlaylist = useCallback(() => {
        const num = parseInt(playlistNumber);
        const next = num - 1;
        if (next < 1) {
            return;
        } else {
            navigate(next.toString());
        }
    }, [playlistNumber, navigate]);

    const prevPlaylist = useCallback(() => {
        const num = parseInt(playlistNumber);
        const prev = num + 1;
        if (prev > 55) {
            return;
        } else {
            navigate(prev.toString());
        }
    }, [playlistNumber, navigate]);

    return (
        <Modal
            isOpen={!!playlistNumber}
            onRequestClose={() => navigate("")}
            closeTimeoutMS={0}
            className="transition-all p-4 z-50 bg-white my-8 overflow-auto max-w-fit focus:outline-0 text-slate-600 m-auto shadow-[0_0_25px_-5px_rgba(0,0,0,0.2)] rounded-sm"
        >
            {playlistNumber && (
                <div>
                    <div className="top-0 sticky flex justify-between items-center bg-white py-4 px-6">
                        <div className="w-8"></div>
                        <div className="font-bold flex space-x-4">
                            {parseInt(playlistNumber) < 55 ? (
                                <div
                                    className="hover:cursor-pointer w-2 hover:text-slate-400"
                                    onClick={prevPlaylist}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </div>
                            ) : (
                                <div className="w-2" />
                            )}
                            <h1 className="w-24 text-center">Playlist #{playlistNumber}</h1>
                            {parseInt(playlistNumber) > 1 ? (
                                <div
                                    className="hover:cursor-pointer w-2 hover:text-slate-400"
                                    onClick={nextPlaylist}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            ) : (
                                <div className="w-2" />
                            )}
                        </div>
                        <div
                            className="cursor-pointer p-2 text-xl hover:text-slate-400"
                            onClick={() => navigate("")}
                        >
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </div>
                    </div>
                    <div className="space-y-2 px-6 pb-4">
                        <div className="flex flex-col justify-center items-center gap-3">
                            <LazyLoadImage
                                className="max-h-[60vh]"
                                alt={"image of playlist" + playlistNumber}
                                src={require("../../../img/playlistcovers/pc" +
                                    playlistNumber +
                                    ".png")}
                                placeholder={
                                    <div className="h-[80vh] w-[54vh] bg-gray-100"></div>
                                }
                            />
                            <div className="italic text-xl">{playlistTitles[playlistNumber - 1]}</div>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
}

const playlistTitles = [
    "Summer Train",
    "Hospital Car",
    "The Winterspring",
    "Still Too Young For Cambridge",
    "We Bought Masks",
    '"The Dream Is The Truth"',
    "The Midnight Week",
    "Rock Canyon River",
    "Watching The Fire",
    "A promise is a promise",
    "Stars Appear",
    "Shock",
    "Apple Orchard Faith",
    "November",
    "Neoclassic State Of The ♡",
    "Swing Dance in the Study Room",
    "Last Night in Turin",
    "Van Gogh's Biography",
    "Bike",
    "In A Square Lit By The Sun",
    "Little Blue Room",
    "Hwy 20",
    "Van Gogh's Biography II",
    '"Hear About My Day"',
    "Capriola",
    "Sent Home",
    "Misery Bouquet",
    "Dinner Party Guest",
    "Frogs In The Chapel",
    "Theory",
    "Saint Augustine",
    "Hall's Pond",
    "Train Bridge Climb",
    `"You're Melting The Ice Around Me"`,
    "The Last of Mr. Lee",
    "Missed You All Summer",
    "Night After The Giant Rat Maze",
    "Saint Augustine II",
    "Springville",
    "Bathtime at Hotel Coolidge",
    "Candle County Library",
    "Dollar Sixty",
    "Flames in the Neighborhood",
    "Smell of Paint",
    "Peachtree Circle Walk",
    '"That Feels Like A Pat Thing"',
    "45 Minutes",
    "Puzzle Piece",
    "Taylor's Best",
    '"A Little Something To Clear Out The Head"',
    "9th East",
    "Kitchen Time",
    "VW + BB",
    "What Would You Like For Breakfast?",
    "M Field"
]
