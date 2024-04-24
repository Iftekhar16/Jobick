"use client"
import React from "react";

export default function NotificationDropdown({notificationDropdown}){
    
    return(
        <div className={`notification-container bg-light1 w-60 rounded-lg shadow-lg absolute top-full right-0 z-[100] overflow-hidden transition ${notificationDropdown? "" : "hidden"}`}>
            <div className="notifications w-full max-h-96 overflow-scroll">
                <a href="" className="notification bg-light1 dark:bg-dark3 hover:bg-light2 dark:hover:bg-dark2 flex gap-3 p-3 transition">
                    <img className="w-12 h-12 object-cover rounded-lg" src="/images/profile/pic1.jpg" alt="" />
                    <div className="text text-left flex gap-1 flex-col justify-center">
                        <div className="title text-xs font-semibold">Dr sultads Send you Photo</div>
                        <div className="subtitle text-[10px] leading-snug text-dark1 dark:text-light1">29 July 2020 - 02:26 PM</div>
                    </div>
                </a>
                <hr className="dark:hidden"/>
                <a href="" className="notification bg-light1 dark:bg-dark3 hover:bg-light2 dark:hover:bg-dark2 flex gap-3 p-3 transition">
                    <img className="w-12 h-12 object-cover rounded-lg" src="/images/profile/pic1.jpg" alt="" />
                    <div className="text text-left flex gap-1 flex-col justify-center">
                        <div className="title text-xs font-semibold">Resport created successfully</div>
                        <div className="subtitle text-[10px] leading-snug text-dark1 dark:text-light1">29 July 2020 - 02:26 PM</div>
                    </div>
                </a>
                <hr className="dark:hidden"/>
                <a href="" className="notification bg-light1 dark:bg-dark3 hover:bg-light2 dark:hover:bg-dark2 flex gap-3 p-3 transition">
                    <img className="w-12 h-12 object-cover rounded-lg" src="/images/profile/pic1.jpg" alt="" />
                    <div className="text text-left flex gap-1 flex-col justify-center">
                        <div className="title text-xs font-semibold">Reminder : Treatment Time!</div>
                        <div className="subtitle text-[10px] leading-snug text-dark1 dark:text-light1">29 July 2020 - 02:26 PM</div>
                    </div>
                </a>
                <hr className="dark:hidden"/>
                <a href="" className="notification bg-light1 dark:bg-dark3 hover:bg-light2 dark:hover:bg-dark2 flex gap-3 p-3 transition">
                    <img className="w-12 h-12 object-cover rounded-lg" src="/images/profile/pic1.jpg" alt="" />
                    <div className="text text-left flex gap-1 flex-col justify-center">
                        <div className="title text-xs font-semibold">Dr sultads Send you Photo</div>
                        <div className="subtitle text-[10px] leading-snug text-dark1 dark:text-light1">29 July 2020 - 02:26 PM</div>
                    </div>
                </a>
                <hr className="dark:hidden"/>
                <a href="" className="notification bg-light1 dark:bg-dark3 hover:bg-light2 dark:hover:bg-dark2 flex gap-3 p-3 transition">
                    <img className="w-12 h-12 object-cover rounded-lg" src="/images/profile/pic1.jpg" alt="" />
                    <div className="text text-left flex gap-1 flex-col justify-center">
                        <div className="title text-xs font-semibold">Report Created Successfully</div>
                        <div className="subtitle text-[10px] leading-snug text-dark1 dark:text-light1">29 July 2020 - 02:26 PM</div>
                    </div>
                </a>
                <hr className="dark:hidden"/>
                <a href="" className="notification bg-light1 dark:bg-dark3 hover:bg-light2 dark:hover:bg-dark2 flex gap-3 p-3 transition">
                    <img className="w-12 h-12 object-cover rounded-lg" src="/images/profile/pic1.jpg" alt="" />
                    <div className="text text-left flex gap-1 flex-col justify-center">
                        <div className="title text-xs font-semibold">Reminder : Treatment Time!</div>
                        <div className="subtitle text-[10px] leading-snug text-dark1 dark:text-light1">29 July 2020 - 02:26 PM</div>
                    </div>
                </a>
            </div>
            <button className="btn-see-all-notification dark:bg-dark3 dark:hover:bg-dark2 w-full rounded-b-lg py-2 text-accent2 dark:text-accent3 text-sm border-[1px] border-t-accent2 dark:border-t-accent3 dark:border-b-dark3 dark:border-x-dark3 transition">See All Notifications</button>
        </div>
    )
}