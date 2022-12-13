import "./Homepage.scss";

export default function Homepage() {
  return (
    <>
      <section className="homepage">
        <div className="homepage__side-menu">
          <p className="">Option 1</p>
          <p className="">Option 2</p>
          <p className="">Option 3</p>
          <p className="">Option 4</p>
        </div>

        <section className="homepage__carousel">
          <div className="">JavaScript, HTML, CSS</div>
          <div className="">Python</div>
          <div className="">Java</div>
          <div className="">C++</div>
        </section>

        <section className="homepage__content">
          <h1 className="">Why study group?</h1>
          <p className="">Explanation</p>
          <p className="">More content</p>
        </section>
      </section>
    </>
  );
}
