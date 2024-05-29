import { Page } from "../../Page";
import { Card } from "../../common/Card";
import { Paragraph } from "../../common/Paragraph";

export function Websites() {
  return (
    <Page title="web projects" pic={require("../../../img/icons/flower.png")}>
      <Paragraph>
        Here is a collection of websites and other projects I've made. It's kind of small for now,
        but that's because I've been busy coding up this one :)
      </Paragraph>
      <div className="flex gap-4 justify-center">
        <div className="max-w-[500px]">
          <Card
            pic={require("../../../img/websites/flowersite.png")}
            link="https://patriciadgao.github.io/dichotomouskey"
            title="Pat's Flowers"
          >
            This site is full of flowers I've photographed and identified. I
            update it pretty regularly when I see new flowers.
          </Card>
        </div>
        {/* <Card
          navigateTo="patsquestions"
          title="Pat's Questions"
        >
          This page has several questions I wrote in an attempt to
          make a better set of questions to make anyone fall in love.
        </Card> */}
      </div>
    </Page>
  );
}
