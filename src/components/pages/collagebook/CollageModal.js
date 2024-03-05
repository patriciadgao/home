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

export function CollageModal() {
  const params = useParams();
  let { "*": collageNumber } = params;
  const navigate = useNavigate();
  const nextCollage = useCallback(() => {
    const num = parseInt(collageNumber);
    const next = num + 1;
    if (next > 80) {
      return;
    } else {
      navigate(next.toString());
    }
  }, [collageNumber, navigate]);

  const prevCollage = useCallback(() => {
    const num = parseInt(collageNumber);
    const prev = num - 1;
    if (prev < 1) {
      return;
    } else {
      navigate(prev.toString());
    }
  }, [collageNumber, navigate]);

  return (
    <Modal
      isOpen={!!collageNumber}
      onRequestClose={() => navigate("")}
      closeTimeoutMS={0}
      className="transition-all p-4 z-50 bg-white my-8 overflow-auto max-w-fit focus:outline-0 text-slate-600 m-auto shadow-[0_0_25px_-5px_rgba(0,0,0,0.2)] rounded-sm"
    >
      {collageNumber && (
        <div>
          <div className="top-0 sticky flex justify-between items-center bg-white py-4 px-6">
            <div className="w-8"></div>
            <div className="font-bold flex space-x-4">
              {parseInt(collageNumber) > 1 ? (
                <div
                  className="hover:cursor-pointer w-2 hover:text-slate-400"
                  onClick={prevCollage}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
              ) : (
                <div className="w-2" />
              )}
              <h1 className="w-24 text-center">Collage #{collageNumber}</h1>
              {parseInt(collageNumber) < 80 ? (
                <div
                  className="hover:cursor-pointer w-2 hover:text-slate-400"
                  onClick={nextCollage}
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
            <div className="flex justify-center items-center space-x-3">
              <LazyLoadImage
                className="max-h-[80vh]"
                alt={"image of collage" + collageNumber}
                src={require("../../../img/collages/collage" +
                  collageNumber +
                  ".jpg")}
                placeholder={
                  <div className="h-[80vh] w-[54vh] bg-gray-100"></div>
                }
              />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
