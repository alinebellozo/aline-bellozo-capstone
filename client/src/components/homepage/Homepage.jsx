import "./Homepage.scss";
import Team from "../../assets/images/team chat.svg";
import Organization from "../../assets/images/organize.svg";

export default function Homepage() {
  return (
    <>
      <section className="homepage">
        <section className="homepage__content-container">
          <div className="homepage__container">
            <h1 className="homepage__header">
              Connect to people. Study together. Set your study goals. Share
              experiences. Learn something new every day.
            </h1>
          </div>
          <div className="homepage__container">
            <p className="homepage__content">
              🔆 This community was created to connect people from all over the
              world, so they can study together, support each other, share their
              experiences, learn from and with each other, increase their
              network, make new friends, and much more!
            </p>

            <img className="homepage__image" src={Team} alt="" />
          </div>

          <div className="homepage__container">
            <p className="homepage__content">
              🔆 You can organize your own schedule, study at your own pace and
              from wherever you are! Join our community and be part of this
              universe of new experiences!
            </p>
            <img className="homepage__image" src={Organization} alt="" />
          </div>
        </section>
      </section>
    </>
  );
}
