import React from "react";
import "../css/AboutPage.css";
import DailyPlannerReference from "../Image/Daily-Planner-Reference.jpg";

const AboutPage = (props) => {
  return (
    <section className="AboutMainPage">
      <h1 style={{ marginTop: "2rem" }}>About</h1>
      <p className="AboutPageParagraph">
        I know, we’ve all been there… One day motivation kicked in, and we
        bought 10 of those daily planner notebooks, swearing to live each day to
        the fullest and make the world a better place… Only to find that all of
        the plans were “unintentionally archived” and the notebooks all
        “prematurely retired”. Well, worry no more. My-Todo is built to help you
        organize your tasks in an orderly manner. Instantly accessible with no
        downloads and no plug-ins, you can easily log your to-dos into the
        calendar and keep track of your daily progress. Since there is no way to
        decommission the web, it might as well just be a good idea to stick to
        the plan, and, you know, see what happens :)
      </p>
      <p className="AboutPageParagraph">
        Fun Lore: The idea of My-Todo actually came from a conversation I had
        with one of my friends, where he joked whether I would be able to
        digitize his daily planner so he would not have to lose another one.
        Well, voila!
      </p>
      <img
        src={DailyPlannerReference}
        alt="Daily Planner Reference Photo"
        className="DailyPlannerImage"
      />
      <p>Picture of the Daily Planner That I Referenced</p>
      <p>David Hu Summer 2021</p>
      <button className="btn btn-primary" onClick={props.goBack}>
        Back
      </button>
    </section>
  );
};

export default React.memo(AboutPage);
