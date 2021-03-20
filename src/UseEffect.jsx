import { useState, useEffect } from "react";
import './UseEffect.css';

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div className="parent-container">
      <h1>USeEffect</h1>
      <main className="card-container">
          {users.map((user, i) => (
       <div key={i} className="card">
              <div class="my-image"> <img src="/images/Kanye_October_2020.jpg" alt="profile" id="profile-pic"/> </div>
          <h5 className="cards">
            <strong>Name:</strong> {user.name}
          </h5>
          <p className="cards">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="cards">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="cards">
            <strong>Phone Number:</strong> {user.phone}
          </p>
          <p className="cards">
            <strong>Website:</strong> {user.website}
          </p>
              <hr />
              <div className="foot">
                <img src="/images/logo-github.svg" alt="" />
                <img src="images\logo-twitter.svg" alt="" />
                <img src="images/logo-facebook.svg" alt="" />
                <img src="/images/logo-linkedin.svg" alt="" />
                {/* <div className="footi" id="fb">fb</div>
                <div  className="footi" id="tw">n</div>
                <div className="footi" id="link">kk</div> */}
              </div>
        </div>
      ))}
      </main>
      
    </div>
  );
};

export default UseEffect;
