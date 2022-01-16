import axios from "axios";
import { ENTITY_TYPE_POST} from "../constant/entityType"
const API_URL = "https://api.phamdong.com"

class PostService {

  async getListAll(fields){
    let ids =await this.getAllIDs();
    let result = await this.getByIDs(ids,fields);
    var listData = Object.values(result.data);
    return listData;
  }

  async getAllIDs() {
    let result = await axios({
      method: "get",
      url: API_URL+"/v0/posts/ids?published=true",
    }).then((data) => {
        return data.data;
    })
    .catch((error) => {
      alert(error)
    });
    return result.data;
  }

  async getByIDs(ids,fields) {
    let oids =  ids.map(id=>`${ENTITY_TYPE_POST}-${id}`);
    let result = await axios({
      method: "put",
      url: API_URL+"/v0/objects",
      data: {
        oids:oids,
        fields:fields
      },
    }).then((data) => {
        return data.data;
    });
    return result.data;
  }

}

export default new PostService();
