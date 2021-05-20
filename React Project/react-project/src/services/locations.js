import http from "../http-common";

class LocationData {

    // http request
    getAll() {
        return http.get('/location');
    }

    createLocation(newLocation) {
        return http.post('/location', newLocation );
    }

    delete(id)
    {
        console.log("test");
        const idObject = {
            id: id
          }
          console.log(idObject);
        return http.post('/locations', idObject);
    }
}

export default new LocationData();
