
import React from "react";
import Profile_pic from "../Rectangle 90@2x.png"
import email_icon from "../Mail.png"
import linkedIn from "../linkedin.png"


export default function Info() {

   return( <>
        <div className="image_div">
            <img src={Profile_pic} alt='CEO' className="profile_pic"/> 
        </div>
        <div className="personal_info">
            <h1>Evans Osei</h1>
            <h4>Frontend Developer</h4>
            <h6>10years of experience @ TikTok</h6>
            <div className="info_btns">
                <button className="btn_white">
                    <img src={email_icon} alt='email'></img>
                    <sapn>Email</sapn>
                </button>
                <button className="btn_blue">
                    <img src={linkedIn} alt="linkedin"></img>
                    <span>LinkedIn</span>
                </button>
            </div>
        </div>
    </>
   )
}