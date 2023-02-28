import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName } from "react-device-detect";
import getUserId from "./util/getUserId";

const CLIENTKEY = "62e2d6eb99281e10e0db0cdd";

let id = getUserId();

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: CLIENTKEY,
    "kind": "multi",
    "account": {
      "key": "account-id-123abc",
      "planType": "Enterprise",
      "isTrial": false
    },
    "owner": {
      "email": "sandy@example.com",
      "firstName": "Sandy",
      "lastName": "Smith"
    },
    "environment": {
      "key": "environment-id-123abc"
    },
    "member": {
      "key": "member-id-123abc",
      "email": "sandy@example.com",
      "hasConfiguredSSO": false
    },
    "user": {
      "key": "user-key-abc123",
      "name": "Sandy S",
      "firstName": "Sandy",
      "lastName": "Smith",
      "email": "sandy@example.com",
      "planType": "Enterprise",
      "isTrial": false,
      "hasConfiguredSSO": false,
      "signupDate": 1641496710527,
      "environmentId": "environment-id-123abc",
      "memberId": "member-id-123abc",
      "accountId": "account-id-123abc",
      "organization": "Really big Company"
    },
  });

  ReactDOM.render(
    <LDProvider>
      <App />
    </LDProvider>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
