const initialState = {
  fullName: "Pham Ngoc Dong",
  userName: "thienma1258",
  ajaxInfo: {
    isLoading: false,
  },
  resumeURL: "https://drive.google.com/file/d/1Q9rzKuQlvowrzJebL-uL1MWob3zm0mJG/view?usp=sharing",
  social: {
    github: "",
    twitter: "",
    linkedin: "",
    facebook: "",
  },
  roles:[
    "Backend Engineer",
    "Full stack engineer",
    "Researcher",
    "Open Source Contributor",
  ],
  hobbits:[" Playing Games"," Research Tech Blog","Playing football","Playing coding challenge"],
  about:"Hi Everyone, I am Ngoc Dong Pham from TPHCM, Vietnam.I am a Backend engineer in NAB studio",
  expressionNote:"I can make thing that better for users!",


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
