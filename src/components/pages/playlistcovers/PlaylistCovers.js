import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import { Page } from "../../Page";
import { Paragraph } from "../../common/Paragraph";
import { PlaylistModal } from "./PlaylistModal";

export function PlaylistCovers() {
    const navigate = useNavigate();
    return (
        <Page title="playlist covers" pic={require("../../../img/icons/notebook.png")}>
            <Paragraph>
                I used to challenge myself all the time to curate the first four songs on a Spotify playlist to form a cohesive playlist cover, and I have lots of good memories of sending ideas back and forth with my friend Zoë.
            </Paragraph>
            <Paragraph>
                I was kind of a playlist cover purist and thought that it was an eyesore to have one picture instead of four, but my buddy Joe convinced me otherwise. After a little over three months, I've got 55 covers you can scroll through now!
            </Paragraph>
            <Paragraph>
                I'm still a purist in a way—all of these drawings are freehand, except the one for "The Winterspring", which I traced from a drawing that I did in 2018.
            </Paragraph>
            <div className="grid md:grid-cols-5 gap-2">
                {[...Array(55)].map((x, i) => (
                    <div key={i}>
                        <LazyLoadImage
                            alt={`playlistcover${55 - i}`}
                            src={require(`../../../img/playlistcovers/pc${55 - i}.png`)}
                            placeholder={
                                <div className="flex items-center">
                                    <BarLoader
                                        color={"#94a3b8"}
                                        loading={true}
                                        size={50}
                                        aria-label="Loading Spinner"
                                    />
                                </div>
                            }
                            onClick={() => navigate((55 - i).toString())}
                            className="hover:cursor-pointer"
                        />
                    </div>
                ))}
            </div>
            <PlaylistModal />
        </Page>
    );
}
