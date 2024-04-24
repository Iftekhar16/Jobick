"use client"
import { useState } from "react";
import Item from "./components/Item";
import SidebarProfileDropdown from "./components/SidebarProfileDropdown";
import ProfileDropdown from "./components/ProfileDropdown";
import NotificationDropdown from "./components/NotificationDropdown";

export default function Home() {

    const [darkMode, setDarkMode] = useState(false);
    function darkToggle() {
        setDarkMode(!darkMode);
    }



    const [profileDropdown, setprofileDropdown] = useState(false);
    function profileDropdownToggle() {
        setprofileDropdown(!profileDropdown);
    }

    const [sideProfileDropdown, setSideProfileDropdown] = useState(false);
    function sideProfileDropdownToggle() {
        setSideProfileDropdown(!sideProfileDropdown);
    }


    const [notificationDropdown, setNotificationDropdown] = useState(false);
    function notificationDropdownToggle() {
        setNotificationDropdown(!notificationDropdown);
    }

    return (
        <div className={`page-container h-[100svh] bg-light3 dark:bg-dark3 text-dark3 dark:text-light3 ${darkMode? "dark":""}`}>


            <div className="header-container h-[10svh] bg-light2 dark:bg-dark2 flex justify-between items-center px-4 py-3">
                <div className="header-left-container flex items-center gap-3">
                    <div className="logo-container w-[250px] flex items-center gap-3">
                        <img className="w-10" src="/images/logos/logo.png" alt="" />
                        <div className="logo-text-container">
                            <h1 className="title text-xl font-bold">Jobick</h1>
                            <p className="title text-dark1 dark:text-light1 text-xs font-light">Job Admin Dashboard</p>
                        </div>
                    </div>
                    <button className="btn-menu text-3xl">
                        {/* <div className="icon-container relative top-1">
                            <iconify-icon icon="line-md:menu-to-close-alt-transition"></iconify-icon>
                        </div> */}
                        <div className="icon-container relative top-1">
                            <iconify-icon icon="line-md:close-to-menu-alt-transition"></iconify-icon>
                        </div>
                    </button>
                    <div className="page-title text-xl font-bold">Invoice</div>
                    <form class="w-96">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div class="relative h-12">
                            <input type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 rounded-lg bg-gray-100 dark:bg-gray-900" placeholder="Search" required />
                            <button type="submit" class="text-light2 absolute right-2 top-1/2 -translate-y-1/2 bg-accent2 dark:bg-accent3 font-medium h-10 rounded-lg text-sm px-4 py-2">Search</button>
                            {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"><iconify-icon icon="uil:search"></iconify-icon></button> */}
                        </div>
                    </form>
                    <button className="btn-modal bg-accent2 dark:bg-accent3 w-10 h-10 rounded-lg">
                        <div className="icon-container text-light2 text-xl relative top-1">
                            <iconify-icon icon="tabler:plus"></iconify-icon>
                        </div>
                    </button>
                </div>
                <div className="header-right flex items-center gap-3 mr-4">
                    {/* <button className="btn-notification text-xl">
                        <div className="icon-container relative top-[2px]">
                            <iconify-icon icon="fa-solid:sun"></iconify-icon>
                        </div>
                    </button> */}
                    <button className="btn-notification text-lg" onClick={darkToggle}>
                        <div className="icon-container relative top-[2px]">
                            <iconify-icon icon="fa-solid:moon"></iconify-icon>
                        </div>
                    </button>
                    <button className="btn-notification text-2xl relative" onClick={notificationDropdownToggle}>
                        <div className="icon-container relative top-1">
                            <iconify-icon icon="mingcute:notification-fill"></iconify-icon>
                        </div>
                        <div className="notification-count-badge bg-accent2 dark:bg-accent3 rounded-full w-4 h-4 flex justify-center items-center text-[10px] text-light2 absolute top-0 -right-1">6</div>
                        <NotificationDropdown notificationDropdown={notificationDropdown}/>
                    </button>
                    <button className="btn-notification text-2xl relative" onClick={profileDropdownToggle}>
                        <div className="icon-container relative top-[2px]">
                            <iconify-icon icon="iconamoon:profile-circle-fill"></iconify-icon>
                        </div>
                        <ProfileDropdown profileDropdown={profileDropdown}/>
                    </button>
                </div>
            </div>


            <div className="body-container h-[90svh] flex">


                {/* sidebar */}
                <div className="sidebar-container w-[268px] h-[90svh] bg-light2 dark:bg-dark2">
                    <div className="btn-profile-dropdown-container relative">
                        <button className="btn-profile-dropdown w-full p-3 flex items-center gap-5" onClick={sideProfileDropdownToggle}>
                            <img className="w-14 h-14 object-cover rounded-lg" src="/images/profile/pic1.jpg" alt="" />
                            <div className="logo-text-container">
                                <h1 className="title text-sm font-bold mb-1">Franklin Jr</h1>
                                <p className="title text-xs font-medium text-dark1 dark:text-light1">Superadmin</p>
                            </div>
                        </button>
                        <SidebarProfileDropdown sideProfileDropdown={sideProfileDropdown}/>
                    </div>


                    <div className="job-dropdown-container relative mb-10">
                        <button className="btn-job-dropdown bg-accent1 dark:bg-dark2 w-full px-3 py-2 flex justify-between items-center">
                            <div className="flex items-center gap-5">
                                <div className="icon-container text-xl relative top-1">
                                    <iconify-icon icon="ic:round-flag"></iconify-icon>
                                </div>
                                <div className="text-container flex items-center gap-3">
                                    <div className="text font-semibold">Jobs</div>
                                    <div className="badge bg-accent2 dark:bg-accent3 text-light2 rounded-lg text-[10px] px-2 py-1">new</div>
                                </div>
                            </div>
                            <div className="icon-container text-3xl relative top-[2px]">
                                <div className="rotate rotate-90">
                                    <iconify-icon icon="ic:round-arrow-right"></iconify-icon>
                                </div>
                            </div>
                            <div className="line absolute top-0 right-0 w-1 h-full bg-accent2 dark:bg-accent3 rounded-full"></div>
                        </button>
                        <div className="subcategory-container">
                            <button className="btn-job-dropdown text-dark1 dark:text-light1 w-full px-3 py-2 pl-10 flex justify-between items-center">
                                <div className="flex items-center gap-5">
                                    <div className="line-container">
                                        <div className="line bg-accent2 dark:bg-accent3 w-2 h-[2px] rounded-full"></div>
                                    </div>
                                    <div className="text-container flex items-center gap-3">
                                        <div className="text">Jobs</div>
                                        <div className="badge bg-accent2 dark:bg-accent3 text-light2 rounded-lg text-[10px] px-2 py-1">new</div>
                                    </div>
                                </div>
                                <div className="icon-container text-3xl relative top-[2px]">
                                    <div className="rotate rotate-90">
                                        <iconify-icon icon="ic:round-arrow-right"></iconify-icon>
                                    </div>
                                </div>
                                <div className="line absolute top-0 right-0 w-1 h-full bg-accent2 dark:bg-accent3 rounded-full"></div>
                            </button>
                        </div>
                    </div>



                    <div className="sidebar-card-container bg-light2 dark:bg-dark2 p-5 m-3 rounded-lg mb-10">
                        <div className="title text-sm font-bold mb-3">Let Jobick Managed Your Resume Easily</div>
                        <div className="subtitle text-sm text-dark1 dark:text-light1">Lorem ipsum dolor sit amet</div>
                    </div>


                    <div className="sidebar-about-container m-5">
                        <div className="title text-sm font-bold mb-1">Jobrick Job Admin</div>
                        <div className="subtitle text-xs text-dark1 dark:text-light1 mb-2">© 2023 All Rights Reserved</div>
                        <div className="made-with-container text-xs text-dark1 dark:text-light1 flex items-center gap-1">
                            <div className="text">Made with</div>
                            <div className="icon-container text-xl relative top-[2px]">
                                <iconify-icon icon="solar:heart-bold"></iconify-icon>
                            </div>
                            <div className="text">by DexignLab</div>
                        </div>
                    </div>


                </div>



                <div className="body-main-container w-[calc(100svw-268px)] overflow-y-scroll p-3 flex flex-col gap-3">


                    <div className="breadcrumb-container bg-light2 dark:bg-dark2 rounded-lg w-full px-5 py-3 flex items-center gap-1">
                        <div className="source text-lg text-accent2 font-semibold">Layout </div>
                        <div className="breadcrumb text-lg text-dark1 dark:text-light1"><span className="text-accent2 dark:text-accent3">/</span> Blank</div>
                    </div>



                    <div className="invoice-container bg-light2 dark:bg-dark2 rounded-lg w-full text-sm">
                        <div className="invoice-header text-dark1 dark:text-light1 px-5 py-3 flex justify-between">
                            <p className="text">invoice</p>
                            <p className="text font-bold">01/01/2018</p>
                            <p className="text"><span className="font-bold">Status: </span>Pending</p>
                        </div>
                        <hr/>
                        <div className="invoice-contact-container px-5 py-10 flex">
                            <div className="left w-1/2 flex">
                                <div className="from-container w-1/2">
                                    <div className="title mb-1">From: </div>
                                    <p className="name text-dark1 dark:text-light1 font-bold">Webz Poland</p>
                                    <p className="address text-dark1 dark:text-light1">Madalinskiego 8 <br/> 71-101 Szczecin, Poland</p>
                                    <p className="email text-dark1 dark:text-light1">Email: info@webz.com.pl</p>
                                    <p className="email text-dark1 dark:text-light1">Phone: +48 444 666 3333</p>
                                </div>
                                <div className="to-container w-1/2">
                                    <div className="title mb-1">To: </div>
                                    <p className="name font-bold text-dark1 dark:text-light1">Bob Mart</p>
                                    <p className="address text-dark1 dark:text-light1">Attn: Daniel Marek<br/> 43-190 Mikolow, Poland</p>
                                    <p className="email text-dark1 dark:text-light1">Email: marek@daniel.com</p>
                                    <p className="email text-dark1 dark:text-light1">Phone: +48 123 456 789</p>
                                </div>
                            </div>
                            <div className="right w-1/2 flex justify-end">
                                <div className="flex flex-col gap-3">
                                    <div className="logo-container w-[250px] flex items-center gap-3">
                                        <img className="w-10" src="/images/logos/logo.png" alt="" />
                                        <div className="logo-text-container">
                                            <h1 className="title text-xl font-bold">Jobick</h1>
                                            <p className="title text-dark1 dark:text-light1 text-xs font-light">Job Admin Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-7">
                                        <div className="text-dark1 dark:text-light1">
                                            <p className="">Please send exact amount:</p>
                                            <p className="font-bold">0.15050000 BTC</p>
                                            <p className="font-bold">1DonateWffyhwAjskoEwXt83pHZxhLTr8H</p>
                                            <p className="text-xs">Current exchange rate 1BTC = $6590 USD</p>
                                        </div>
                                        <img className="w-20" src="/images/qr.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item-description-container">
                            <div className="header-container flex px-3 py-2 text-base font-bold">
                                <p className="title-number px-3 py-2 w-14">#</p>
                                <p className="title-item px-3 py-2 w-40">Item</p>
                                <p className="title-description px-3 py-2 flex flex-grow">Description</p>
                                <p className="title-unit-cost px-3 py-2 w-28">Unit Cost</p>
                                <p className="title-quantity px-3 py-2 w-14">Qty</p>
                                <p className="title-total px-3 py-2 w-28 text-end">Total</p>
                            </div>
                            <Item num="1" item="Origin License" desc="Extended License" uCost="$999,00" qty="1" total="$999,00"/>
                            <Item num="2" item="Custom Services" desc="Instalation and Customization (cost per hour)" uCost="$150,00" qty="20" total="$3.000,00"/>
                            <Item num="3" item="Hosting" desc="1 year subcription" uCost="$499,00" qty="1" total="$499,00"/>
                            <Item num="4" item="Platinum Support" desc="1 year subcription 24/7" uCost="$3.999,00" qty="1" total="$3.999,00"/>
                            <Item num="5" item="Custom Services" desc="Instalation and Customization (cost per hour)" uCost="$150,00" qty="20" total="$3.000,00"/>
                            <Item num="6" item="Platinum Support" desc="1 year subcription 24/7" uCost="$3.999,00" qty="1" total="$3.999,00"/>
                        </div>


                        <div className="price-container text-dark1 dark:text-light1 w-full flex flex-col items-end pr-5 mb-20">
                            <div className="subtotal-container flex justify-end px-3 py-2 border-b-[1px] border-gray-300">
                                <p className="title px-3 py-2 w-52 font-bold">Subtotal</p>
                                <p className="value text-end px-3 py-2 w-52">$8.497,00</p>
                            </div>
                            <div className="discount-container flex justify-end px-3 py-2 border-b-[1px] border-gray-300">
                                <p className="title px-3 py-2 w-52 font-bold">Discount (20%)</p>
                                <p className="value text-end px-3 py-2 w-52">$1,699,40</p>
                            </div>
                            <div className="vat-container flex justify-end px-3 py-2 border-b-[1px] border-gray-300">
                                <p className="title px-3 py-2 w-52 font-bold">VAT (10%)</p>
                                <p className="value text-end px-3 py-2 w-52">$679,76</p>
                            </div>
                            <div className="total-container flex justify-end px-3 py-2">
                                <p className="title px-3 py-2 w-52 font-bold">Total</p>
                                <p className="value text-end px-3 py-2 w-52">$7.477,36 <br/>0.15050000 BTC</p>
                            </div>

                        </div>

                    </div>

                    <div className="copyright-container mt-10 text-dark1 dark:text-light1 text-xs text-center">Copyright © Designed & Developed by <a className="text-accent2 dark:text-accent3 no-underline" href="#">DexignLab</a> 2023</div>


                </div>




            </div>




        </div>  
    );
}
