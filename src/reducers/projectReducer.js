var lexisLogo = "./lexisnexis.jpg";
var ertLogo = "./ert.jpg";
var localizeLogo = "./inkr-localize.png";
var accessLogo = "../access.jpg";

const projectState = {
  itemPerRow: 3,
  items: [
    {
      imageURL: accessLogo,
      isBlog: false,
      description:
        "  INKR Access is an identity & access management system (IAM) that provides a centralized hub for managing access to all INKR enterprise products.",
      link: "https://access.inkr.com/",
      title: "INKR Access",
      isNDA: false,
      isShow: true,
    },
    {
      imageURL: localizeLogo,
      isBlog: false,
      description:
        " INKR Localize is an enterprise localization & translation software that caters specifically to comics.",
      link: "https://inkr.com/localize",
      title: "INKR Localize",
      isNDA: false,
      isShow: true,
    },
    {
      imageURL:
        "https://gamek.mediacdn.vn/133514250583805952/2020/10/16/photo-1-1602852285635290272184.png",
      isBlog: false,
      description:
        "The most affordable way to read the latest manga, manhua, webtoons, and western comics.",
      link: "https://inkr.com/",
      title: "INKR Comics App",
      isNDA: false,
      isShow: true,
    },
    {
      imageURL: ertLogo,
      isBlog: false,
      description:
        "Tool help client easily manage task and timeline for ert team",
      link: "",
      title: "ERT PM tool",
      isNDA: true,
      isShow: true,
    },
    {
      imageURL: lexisLogo,
      isBlog: false,
      description:
        "Project help improve healthcare outcomes through consumer, provider and claims data analyticsr",
      link: "",
      title: "Health care risk solution",
      isNDA: true,
      isShow: true,
    },
    {
      imageURL:
        "https://cdn.tgdd.vn/hoi-dap/651567/y-nghia-logo-cua-the-gioi-di-dong-la-gi1-800x450.jpg",
      isBlog: false,
      description:
        "ERP system for MWG help imrpove business operator(banking,delivery,...) ",
      link: "",
      title: "ERP system",
      isNDA: true,
      isShow: true,
    },
  ],
};

const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectReducer;
