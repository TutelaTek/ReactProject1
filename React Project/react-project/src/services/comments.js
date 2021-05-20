import http from "../http-common";

class CommentData {

    // http request
    postComment(userComment) {
        
        return http.post('/comment', userComment);
    }
}

export default new CommentData();
