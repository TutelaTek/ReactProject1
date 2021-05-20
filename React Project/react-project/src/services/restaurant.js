import http from "../http-common";

class RestaurantData {

    // http request
    getAll() {
        return http.get('/menu');
    }

    getOne(id) {
        
        
        return http.get('/item/'+ id);
    }

    menuItemPost(newItem){
        return http.post('/menu', newItem)
    }

    delete(id)
    {
        console.log("test");
        const idObject = {
            id: id
          }
          console.log(idObject);
        return http.post('/menus', idObject);
    }

    edit_Item(newItem) {
        const id = newItem._id;
        const { _id, ...newResponse } = newItem;
        console.log(newResponse)
        return http.put('/menu/' + id , newResponse )
    }
}

export default new RestaurantData();
