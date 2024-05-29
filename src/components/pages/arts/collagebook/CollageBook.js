import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import { Page } from "../../../Page";
import { Paragraph } from "../../../common/Paragraph";
import { CollageModal } from "./CollageModal";

export function CollageBook() {
  const navigate = useNavigate();
  return (
    <Page title="collage book" pic={require("../../../../img/icons/notebook.png")}>
      <Paragraph>
        During the pandemic, I spent a bit of time learning how to collage, and
        also doodling all over a 5.5 x 8.5in sketchbook.
      </Paragraph>
      <Paragraph>
        When I filled up the sketchbook and realized I didn't like everything in
        it (you know how doodles are...), I realized I could use my new collage
        skills to cover up the pages I disliked instead of ripping them out!
      </Paragraph>
      <Paragraph>
        These collages are the result. I hope you enjoy them as much as I do!
      </Paragraph>
      <div className="md:grid md:grid-cols-3 gap-2">
        {[...Array(80)].map((x, i) => (
          <div key={i}>
            <LazyLoadImage
              alt={`collage${i}`}
              src={require(`../../../../img/collages/collage${i + 1}.jpg`)}
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
              onClick={() => navigate((i + 1).toString())}
              className="hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
      <CollageModal />
    </Page>
  );
}
