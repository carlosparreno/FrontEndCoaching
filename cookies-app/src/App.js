import React, { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Status: Initial");
  const [cookieName, setCookieName] = useState("-");
  const [cookieValue, setCookieValue] = useState("-");

  const createCookie = (cookieName, cookieValue) => {
    // To create or store a new cookie, assign a name=value string to this property
    document.cookie = `${cookieName}=${cookieValue}`;
    setCookieStatus(
      `Status: Cookie ${cookieName} created`,
      cookieName,
      cookieValue
    );
  };

  const updateCookie = (cookieName, cookieValue) => {
    // To update a cookie we need to create another cookie with the same name
    createCookie(cookieName, cookieValue);
  };

  const deleteCookie = cookieName => {
    // To delete set it once again using the same name and attributes, specifying an
    // empty value, and its max-age attribute to 0
    document.cookie = `${cookieName}=; max-age=0`;
    setCookieStatus(`Status: Cookie ${cookieName} deleted`, "-", "-");
  };

  const createCookieWithMaxAge = (cookieName, cookieValue, maxAge) => {
    // By default, the lifetime of a cookie is the current browser session
    // To remain after the browser session, specify its lifetime (in seconds) with a max-age attribute
    document.cookie = `${cookieName}=${cookieValue};max-age=${maxAge}`;
    setCookieStatus(
      `Status: Cookie ${cookieName} created with max-age=${maxAge}`,
      cookieName,
      cookieValue
    );
  };

  const createCookieWithEncodeURIComponent = (cookieName, cookieValue) => {
    // By default, the lifetime of a cookie is the current browser session
    // To remain after the browser session, specify its lifetime (in seconds) with a max-age attribute
    document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)}`;
    setCookieStatus(
      `Status: Cookie ${cookieName} created with encodeURIComponent=${cookieValue}`,
      cookieName,
      cookieValue
    );
  };

  const createCookieWithExpires = (cookieName, cookieValue, expires) => {
    // By default, the lifetime of a cookie is the current browser session
    // To remain after the browser session, specify its lifetime (in seconds) with a max-age attribute
    document.cookie = `${cookieName}=${cookieValue};expires=${expires}`;
    setCookieStatus(
      `Status: Cookie ${cookieName} created with expires=${expires}`,
      cookieName,
      cookieValue
    );
  };

  const setCookieStatus = (status, cookieName, cookieValue) => {
    setStatus(status);
    setCookieName(cookieName);
    setCookieValue(cookieValue);
  };

  return (
    <div>
      <header className="App-header">
        <h1>Cookies App</h1>
      </header>
      <div className="main-container">
        <div className="margin">
          <h3>{status}</h3>
        </div>
        <Button
          text="Create Cookie"
          action={() => createCookie("carlos-test", "carlosValue")}
        />
        <Button
          text="Update Cookie"
          action={() => updateCookie("carlos-test", "UpdatedValue")}
        />
        <Button
          text="Delete Cookie"
          action={() => deleteCookie("carlos-test")}
        />
        <Button
          text="Create Cookie with encodeURIComponent for 'Value with semicolons; commas, or spaces"
          action={() =>
            createCookieWithEncodeURIComponent(
              "carlos-test-encodeURIComponent",
              "Value with semicolons; commas, or spaces"
            )
          }
        />
        <Button
          text="Create Cookie with lifetime using 'max-age' of 3 hours (3 * 60 * 60 seconds)"
          action={() =>
            createCookieWithMaxAge(
              "carlos-test-max-age",
              "carlosValue-max-age",
              3 * 60 * 60
            )
          }
        />
        <Button
          text="Create Cookie with lifetime 'expires' and a date Thu, 18 Jul 2086 00:00:00"
          action={() =>
            createCookieWithExpires(
              "carlos-test-expires",
              "carlosValue-expires",
              "Thu, 18 Jul 2086 00:00:00"
            )
          }
        />
        <label>
          <b>{"CookieName: "}</b>
          {cookieName}
        </label>
        <br />
        <br />
        <label>
          <b>{"CookieValue: "}</b>
          {cookieValue}
        </label>
      </div>
    </div>
  );
}

export default App;
