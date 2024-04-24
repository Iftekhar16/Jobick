"use client"
import React from "react";


export default function SidebarProfileDropdown({sideProfileDropdown}){
    
    return(
        <div className={`profile-menu-container w-[268px] rounded-lg shadow-lg absolute top-full left-5 z-[100] overflow-hidden transition ${sideProfileDropdown? "" : "hidden"}`}>
            <a className="item bg-light1 dark:bg-dark3 hover:bg-light2 dark:hover:bg-dark2 text-sm text-dark1 dark:text-light1 flex items-center gap-2 px-3 py-1 transition" href="#">
                <div className="icon-container relative top-1 text-lg">
                    <iconify-icon icon="iconamoon:profile"></iconify-icon>
                </div>
                Profile
            </a>
            <a className="item bg-light1 dark:bg-dark3 hover:bg-light2 dark:hover:bg-dark2 text-sm text-dark1 dark:text-light1 flex items-center gap-2 px-3 py-1 transition" href="#">
                <div className="icon-container relative top-1 text-lg">
                    <iconify-icon icon="mdi:message-outline"></iconify-icon>
                </div>
                Inbox
            </a>
            <a className="item bg-light1 dark:bg-dark3 hover:bg-light2 dark:hover:bg-dark2 text-sm text-dark1 dark:text-light1 flex items-center gap-2 px-3 py-1 transition" href="#">
                <div className="icon-container relative top-1 text-lg">
                    <iconify-icon icon="ic:round-logout"></iconify-icon>
                </div>
                Logout
            </a>
        </div>
    )
}