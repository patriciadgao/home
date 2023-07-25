import { faBook } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import BarLoader from "react-spinners/BarLoader";
import { Page } from "../../Page";

export function CollageBook() {
    return (
        <Page title="collage book" icon={faBook}>
            <div>
                <ResponsiveMasonry>
                    <Masonry gutter="5px">
                        {[...Array(80)].map((x, i) => (
                            <div key={i}>
                                <LazyLoadImage
                                    alt={`collage${1}`}
                                    src={require(`../../../photos/collages/collage${i + 1}.jpg`)}
                                    placeholder={<div className="flex items-center">
                                        <BarLoader
                                            color={"#94a3b8"}
                                            loading={true}
                                            size={50}
                                            aria-label="Loading Spinner"
                                        />
                                    </div>}
                                />
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </Page>
    )
}