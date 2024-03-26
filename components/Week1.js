import React from "react";
import myImage from './images/myImage.jpg'   
const MyProfile =()=>{};
function Week1(){
    return(
        <div className="Week1">
            <h1>Displaying my profile :</h1>
            <MyProfile/>
            <img src={myImage} style={{height:200, width:200,borderRadius:100}}></img>
   
            <h2> Praharsha Pillamari</h2>
            <p> Iam P.Praharsha currently pursuing B.Tech in Malla Reddy University.
             Iam Computer Science Engineer. Currently Iam studying in Second year.
             My roll number is 2211CS010462. Iam an optimistic person. Iam from Nizamabad,Telangana. Our's is a middle class family. My inspiration is my parents.</p>
        </div>
    )
}
export default Week1;