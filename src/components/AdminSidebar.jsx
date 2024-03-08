import React, { useEffect, useState } from "react";
// import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { TbSettingsCog } from "react-icons/tb";
// 
import { FcBusinessContact, FcTemplate  } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi2";
import { MdCampaign } from "react-icons/md";
import { BsRobot, BsChatRightDotsFill  } from "react-icons/bs";
import { GiRobotAntennas, GiVintageRobot } from "react-icons/gi";

// 
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 1100);

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
          <div>
            <h2>Logo.</h2>
            </div>       
          
        <DivOne location={location} />
        {/* <DivTwo location={location} />
        <DivThree location={location} /> */}
       <div>
          {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
          </div>
       
      </aside>
    </>
  );
};

const DivOne = ({ location }) => (
  <>
  <div>
    <h5>MENU</h5>
    <ul>
      <Li
        url="/dashboard"
        text="DASHBOARD"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/product"
        text="REST API"
        Icon={TbSettingsCog}
        location={location}
      />
  
    </ul>
  </div>
  <div>
    <h5>CONTACT MANAGEMENT</h5>
    <ul>
      <Li
        url="/contacts"
        text="Contact"
        Icon={FcBusinessContact}
        location={location}
      />
      <Li
        url="/groups"
        text="Groups"
        Icon={HiUserGroup}
        location={location}
      />
  
    </ul>
  </div>
  <div>
    <h5>TEMPLATES & CAMPAIGNS</h5>
    <ul>
      <Li
        url="/templates"
        text="Templates"
        Icon={FcTemplate}
        location={location}
      />
      <Li
        url="/campaigns"
        text="Campaigns"
        Icon={MdCampaign}
        location={location}
      />
  
    </ul>
  </div>
  <div>
    <h5>CHATFLOW AUTOMATION </h5>
    <ul>
      <Li
        url="/keyword-automation"
        text="Keyword Automation"
        Icon={BsRobot}
        location={location}
      />
      <Li
        url="/assign-agent"
        text="Assign Agent"
        Icon={GiVintageRobot}
        location={location}
      />
  
    </ul>
  </div>
  <div>
    <h5>INBOX</h5>
    <ul>
      <Li
        url="/inbox"
        text="Chat inbox"
        Icon={BsChatRightDotsFill}
        location={location}
      />
  
    </ul>
  </div>
  </>
);

const Li = ({ url, text, location, Icon }) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
        
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
