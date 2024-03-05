import { classname } from "../../../funcs/classname";
import { Page } from "../../Page";
import { Header } from "../../common/Header";
import { Paragraph } from "../../common/Paragraph";
import { ParagraphThin } from "../../common/ParagraphThin";

export function Poetry() {
  return (
    <Page title="poetry" pic={require("../../../img/icons/bird.png")}>
      <Paragraph>
        Occasionally I write poetry and sometimes people are nice enough to
        publish it. Here's a list of places my poems have been published so far,
        with links when I have them.
      </Paragraph>
      <ParagraphThin>
        <Header>2023</Header>
        <div className="grid grid-cols-4">
          <div className="w-1/2 border-r-2 border-dotted border-sky-400"></div>
          <ul className="col-span-3 space-y-5 mb-4">
            <Poem
              title="Silver Floor"
              publisher="SLCC Community Writing Center"
            />
            <Poem
              title={`"Three nights later when I can't sleep I stay"`}
              publisher="SLCC Community Writing Center"
            />
            <Poem
              title="Buckley Draw"
              publisher="SLCC Community Writing Center"
            />
            <Poem
              title="Woman On Car, 1947"
              publisher="SLCC Community Writing Center"
            />
            <Poem
              title="Assisted Living"
              publisher="SLCC Community Writing Center"
            />
            <Poem
              title="China"
              publisher="Ghost City Press"
              link="https://ghostcitypress.com/poetry-87/2023/2/20/patricia-gao"
            />
          </ul>
        </div>
        <Header>2022</Header>
        <div className="grid grid-cols-4">
          <div className="w-1/2 border-r-2 border-dotted border-sky-400"></div>
          <ul className="col-span-3 space-y-5 mb-4">
            <Poem
              title="One Buried, One Chained"
              publisher="Denver Quarterly"
            />
            <Poem title="On Sorolla's Oil on Canvas" publisher="Acumen" />
            <Poem
              title="The Swim"
              publisher="Acumen"
              link="https://acumen-poetry.co.uk/__trashed"
            />
            <Poem
              title="I Went Down Crying"
              publisher="Eunoia Review"
              link="https://eunoiareview.wordpress.com/2022/04/13/i-went-down-crying/"
            />
            <Poem
              title="Swaying As He Shivered"
              publisher="Wildness"
              link="https://readwildness.com/29/gao-swaying"
            />
          </ul>
        </div>
        <Header>2021</Header>
        <div className="grid grid-cols-4">
          <div className="w-1/2 border-r-2 border-dotted border-sky-400"></div>
          <ul className="col-span-3 space-y-5 mb-4">
            <Poem
              title="Burning Fake Money"
              publisher="Spoon River Poetry Review"
            />
          </ul>
        </div>
      </ParagraphThin>
    </Page>
  );
}

const Poem = ({ title, publisher, link }) => {
  return (
    <li>
      <div
        className={classname(
          "font-semibold text-lg",
          link
            ? "text-sky-400 hover:text-sky-600 visited:text-sky-700"
            : "text-black"
        )}
      >
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </div>
      <div className="text-sm">{publisher}</div>
    </li>
  );
};
