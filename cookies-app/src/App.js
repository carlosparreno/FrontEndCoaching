import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Status: Initial");
  const [cookieName, setCookieName] = useState("-");
  const [cookieValue, setCookieValue] = useState("-");
  const [cookies, setAllCookies] = useState(null);

  useEffect(() => {
    setAllCookies(document.cookie.split(";"));
  }, []);

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

  const readCookie = cookieName => {
    // document.cookie property simply returns a string containing a
    // semicolon and a space separated list of all cookies
    const allCookies = document.cookie.split(";");
    setAllCookies(allCookies);

    for (let i = 0; i < allCookies.length; i++) {
      const cookiePair = allCookies[i].split("=");
      // Removing whitespace at the beginning of the cookie name
      if (cookieName === cookiePair[0].trim()) {
        setCookieStatus(
          `Status: Cookie ${cookieName} was read with value = ${decodeURIComponent(
            cookiePair[1]
          )}`,
          cookieName,
          decodeURIComponent(cookiePair[1])
        );
        return decodeURIComponent(cookiePair[1]);
      }
    }
    setCookieStatus(
      `Status: Cookie ${cookieName} doesn't exist`,
      "null",
      "null"
    );
    return null;
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

  // path, domain

  return (
    <div>
      <header className="App-header">
        <h1>Cookies App</h1>
      </header>
      <div className="main-container">
        <h3>{status}</h3>
        <Button
          text="Create Cookie"
          action={() => createCookie("MyTest", "MyValue")}
        />
        <Button
          text="Update Cookie"
          action={() => updateCookie("MyTest", "UpdatedValue")}
        />
        <Button text="Delete Cookie" action={() => deleteCookie("MyTest")} />
        <Button text="Read Cookie" action={() => readCookie("MyTest")} />
        <Button
          text="Create Cookie with encodeURIComponent for 'Value with semicolons; commas, or spaces"
          action={() =>
            createCookieWithEncodeURIComponent(
              "Mytest-encodeURIComponent",
              "Value with semicolons; commas, or spaces"
            )
          }
        />
        <Button
          text="Create Cookie with lifetime using 'max-age' of 3 hours (3 * 60 * 60 seconds)"
          action={() =>
            createCookieWithMaxAge(
              "Mytest-max-age",
              "MyValue-max-age",
              3 * 60 * 60
            )
          }
        />
        <Button
          text="Create Cookie with lifetime 'expires' and a date Thu, 18 Jul 2086 00:00:00"
          action={() =>
            createCookieWithExpires(
              "Mytest-expires",
              "MyValue-expires",
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
        <br />
        <br />
        <select>
          {cookies &&
            cookies.map(cookie => {
              return (
                <option key={cookie} value={cookie}>
                  {cookie}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default App;
