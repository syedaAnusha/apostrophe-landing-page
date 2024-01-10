import "./childSection6.css";

export default function ChildSection6() {
  return (
    <>
      <div className="text__section">
        <h1>Sign up for the latest product news and updates.</h1>

        <div className="form__section">
          <input
            type="email"
            name="Your email"
            id="email"
            required
            placeholder="Your email"
          />
          {/* <div className="msg">
            <ul>
              <li>Please complete this required field.</li>
            </ul>
          </div> */}
          <div className="submit__btn">
            <p>submit</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
