// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Page } from "../../Page";
import { Card } from "../../common/Card";
import { Paragraph } from "../../common/Paragraph";

export function Websites() {
  return (
    <Page title="websites" pic={require("../../../img/icons/flower.png")}>
      <Paragraph>
        Here is a collection of websites I've made. It's kind of small for now,
        but that's because I've been busy coding up this one :)
      </Paragraph>
      {/* <ResponsiveMasonry>
        <Masonry gutter="4"> */}
      <Paragraph>
        <Card
          pic={require("../../../img/websites/flowersite.png")}
          link="https://patriciadgao.github.io/dichotomouskey"
          title="Pat's Flowers"
        >
          This site is full of flowers I've photographed and identified. I
          update it pretty regularly when I see new flowers.
        </Card>
      </Paragraph>
      {/* </Masonry>
      </ResponsiveMasonry> */}
    </Page>
  );
}
