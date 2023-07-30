import { Page } from "../../Page";
import { Paragraph } from "../../common/Paragraph";

export function Home() {
  return (
    <Page title="home" pic={require("../../../img/icons/house.png")}>
      <Paragraph>Hi! I'm Pat. Welcome to my website.</Paragraph>
      <Paragraph>
        I'm not really sure what to put on this homepage for now, so that's why
        it's a little empty.
      </Paragraph>
      <Paragraph>
        Feel free to click around! I promise there's some more content on a few
        of the other pages.
      </Paragraph>
    </Page>
  );
}
