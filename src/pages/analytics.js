import React, { useEffect, useState } from "react";
import firebase from '../util/firebase'
import Link from "next/link";
import { GetAnalysis } from '../util/util.js'
import "../styles/global.scss";

const useAuth = () => {
  const fireUser = firebase.auth().currentUser;
  const [user, setUser] = useState(fireUser);

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      user ? setUser(user) : setUser("error");
    });
    return () => {
      unsub();
    };
  });
  return user;
};

function AnalyticsPage(props) {
  const auth = useAuth();
  const analysis = GetAnalysis();
  return (
    <div className="analysis">
      {auth != "error" && auth && analysis.length &&
        <div>
          <span className="text-primary col-lg-6">User email:</span>
          <span className="text-info col-lg-6">{auth.email}</span>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>name</th>
                <th>username</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              {
                analysis.map((item, index) =>
                  <tr key={index} className="trow">
                    <td> {item.username}</td>
                    <td> {item.name} </td>
                    <td> {item.email} </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      }
      {auth == "error" &&
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>name</th>
                <th>username</th>
                <th>email</th>
              </tr>
            </thead>
          </table>
          <div className="mx-auto">
            <Link href="/auth/signout" passHref>
              MORE DATA
            </Link>
          </div>
        </>
      }
    </div>
  );
}

export default AnalyticsPage;
