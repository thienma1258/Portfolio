import chatify from "../Assets/Projects/chatify.png";


const projectState = {
    itemPerRow:2,
    items:[{
    imageURL:chatify,
    isBlog:false,
    description:"",
    link:"",
    title:""
  }]
};
  
  const projectReducer = (state = projectState, action) => {
    switch (action.type) {
    
      default:
        return state;
    }
  };
  
  export default projectReducer;
  