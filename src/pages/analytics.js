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
      user ? setUser(user) : setUser(null);
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
      {auth && analysis.length?
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
                analysis.map(item =>
                  <tr className="trow"> <td> {item.username}
                  </td> <td> {item.name} </td><td> {item.email} </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div> :
        <Link href="/auth/signout" passHref>
          <div className="moredata">
            <button type="button" className="btn btn-outline-info">MORE DATA</button>
          </div>
        </Link>
      }
    </div>
  );
}

export default AnalyticsPage;
