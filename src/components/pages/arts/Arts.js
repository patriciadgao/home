// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Page } from "../../Page";
import { Card } from "../../common/Card";
import { Paragraph } from "../../common/Paragraph";

export function Arts() {
    return (
        <Page title="art projects" pic={require("../../../img/icons/notebook.png")}>
            <Paragraph>
                Here are some art projects I have made! There are only two collections because the theme tends to be "make a bunch of the same thing for months," which, as you may have guessed, tends to take me months.
            </Paragraph>
            {/* <ResponsiveMasonry>
                <Masonry gutter="4"> */}
            <div className="flex gap-4">
                <div className="w-1/2">
                    <Card
                        pic={require("../../../img/collages/collage60.jpg")}
                        title="collage book"
                        navigateTo={"../collagebook"}
                    >
                        Photos from a notebook of 80 collages!
                    </Card>
                </div>
                <div className="w-1/2">
                    <Card
                        pic={require("../../../img/playlistcovers/pc53.png")}
                        title="playlist covers"
                        navigateTo={"../playlistcovers"}
                    >
                        55 playlist covers that I drew!
                    </Card>
                </div>
            </div>
            {/* </Masonry>
            </ResponsiveMasonry> */}
        </Page>
    );
}
