/**
 * Created by Administrator on 2017/3/1.
 */
import {User} from "./User"
export class UserList{
    constructor(){
        this.data=[];
    }
    setData(datanew){
        if(!this.data.is(datanew))
        {
            this.data=datanew;
            this.render();
        }
    }
    render()
    {
        this.data.map(function (user) {
            return User(user).render();
        });
    }
}