import { SKILL_SET,TOOLS } from "../constant/skillSet";

import cvPDF from "../Assets/cv.pdf"


const initialState = {
  fullName: "Pham Ngoc Dong",
  userName: "thienma1258",
  phoneNumber : "+84937019527",
  ajaxInfo: {
    isLoading: false,
  },
  resumeURL:
  cvPDF,
  email: "cpud1258@gmail.com",
  social: {
    github: "https://github.com/thienma1258",
    twitter: "",
    linkedin:  "https://www.linkedin.com/in/%C4%91%C3%B4ng-ph%E1%BA%A1m-3574a3167/",
    facebook: "https://www.facebook.com/profile.php?id=100010303393399",
  },
  roles: [
    "Backend Engineer",
    "Full stack engineer",
    "Researcher",
    "Open Source Contributor",
  ],
  skillSet: [SKILL_SET.GOLANG,SKILL_SET.AWS,SKILL_SET.CPlusPlus,SKILL_SET.MONGODB,SKILL_SET.MYSQL,SKILL_SET.NODE,SKILL_SET.PYTHON,SKILL_SET.JAVA,SKILL_SET.REDIS],
  tools : [TOOLS.LINUX,TOOLS.IDE,TOOLS.JIRA,TOOLS.NOTION,TOOLS.SLACK],
  hobbits: [
    "Playing Games",
    " Research Tech Blog",
    "Playing football",
    "Playing coding challenge",
  ],
  about:
    "Hi Everyone, I am Ngoc Dong Pham from TPHCM, Vietnam.I am a Backend engineer in NAB studio",
  expressionNote: "I can make thing that better for users!",

  introduceHTML: `<h1 style={{ fontSize: "2.6em" }}>
  LET ME <span className="purple"> INTRODUCE </span> MYSELF
</h1>
<p className="home-about-body">
  I fell in love with programming and I have at least learnt
  something, I think… 🤷‍♂️
  <br />
  <br />I am fluent in classics like
  <i>
    <b className="purple"> Golang, C++ and Python,.. </b>
  </i>
  <br />
  <br />
  My field of Interest's are building new &nbsp;
  <i>
    <b className="purple">Service and Product for million  users </b> and
    also in areas related to
    <b className="purple">
      Computer vision
    </b>
  </i>
  <br />
  <br />
</p>`,
};

const ownerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "test":
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default ownerReducer;
