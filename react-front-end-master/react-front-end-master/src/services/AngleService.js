import axios from 'axios'


const ANGEL_GET_REST_URL ='http://localhost:8181/api/allAngleRecord'
const ANGEL_POST_REST_URL ='http://localhost:8181/api/addAngle'

class AngleService {
    getAngleInfo() {
       return axios.get(ANGEL_GET_REST_URL);
    }


    saveAngelInfo(angel){
      
      return axios({method:'post',
                    url:ANGEL_POST_REST_URL,
                    data:{
                          email:angel.email,
                          contact:angel.password
                         }
                  });
    }
   }
export default new AngleService();