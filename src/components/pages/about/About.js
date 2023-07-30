import { Page } from "../../Page";
import { Paragraph } from "../../common/Paragraph";

export function About() {
  return (
    <Page title="about" pic={require("../../../img/icons/mug.png")}>
      <Paragraph>
        A girl named Pat made this website, plus lots of the things it contains
        (like other websites and even the little doodle of a mug on top of this
        page).
      </Paragraph>
      <Paragraph>
        Here's where you will eventually find her contact information, and maybe
        another doodle.
      </Paragraph>
    </Page>
  );
}
