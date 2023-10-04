import { faBell, faEnvelope, faGraduationCap, faLocation, faLocationPin, faLocationPinLock, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useState} from "react";
import UserService from "../serivces/UserService";

const UserProfile = () =>{
    const [userData,setUserData] = useState([])

    const token = window.sessionStorage.getItem("Authorization"); 

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

        
      const getUserData = () => {
        UserService.getProfile(config).then((response) =>{
          setUserData(response.data)
          console.log(response.data)
        }).catch(error =>{
          console.log(error);
        });
      }

    return(
        <div className="container taskorbit-text">
        <div className="row">
          <div className="col-md-12">
            <h1>My Profile</h1>
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-6 taskorbit-text">
                    <h2>[User's Name]</h2>
                  </div>
                  <div className="col-md-6 text-right">
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body taskorbit-text">
                <ul className="list-group taskorbit-text">
                  <li className="list-group-item">
                  <FontAwesomeIcon icon={faEnvelope} style={{color: "#2A679C"}}/> Email: [User's email ID]
                  </li>
                  <li className="list-group-item">
                  <FontAwesomeIcon icon={faMobile} style={{color: "#2A679C"}}/> Mobile: [User's mobile number]
                  </li>
                  <li className="list-group-item">
                  <FontAwesomeIcon icon={faLocationPin} style={{color: "#2A679C"}}/> Location: [User's
                    location]
                  </li>
                  <li className="list-group-item">
                  <FontAwesomeIcon icon={faGraduationCap} style={{color: "#2A679C"}}/> Qualifications: [User's
                    qualifications]
                  </li>
                  <li className="list-group-item">
                  <FontAwesomeIcon icon={faBell} style={{color: "#2A679C"}}/> Notification preferences: [User's
                    notification preferences]
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default UserProfile;