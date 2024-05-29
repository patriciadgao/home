import { Page } from "../../../Page";
import { Paragraph } from "../../../common/Paragraph";
import { questions } from "./questions";

export function PatsQuestions() {
    return (
        <Page title="Pat's Questions" pic={require("../../../../img/icons/flower.png")}>
            <Paragraph>
                In 2021, I went on a road trip with two people I didn't know very well, and
                was nervous about what to talk about on the drive. A coworker had just sent me
                Arthur Aron's <a href="https://36questionsinlove.com/">36 questions to fall in love</a>,
                so I brought those up and the three of us got to know each other pretty stinkin' well.
            </Paragraph>
            <Paragraph>
                I liked those questions, but I wanted to write my own because I'm fond of deep questions (and
                I have a few gripes about the original 36).
            </Paragraph>
            <Paragraph>
                I hope these bring you some joy and lessen your future road trip anxieties!
            </Paragraph>
            <div className="text-center items-center space-y-6">
                {questions.map((q, index) => (
                    <div key={`Question-${index}`}>
                        <div className="font-semibold">{index + 1}</div>
                        <div className="w-1/2">{q}</div>
                    </div>
                ))}
            </div>
        </Page>
    );
}
