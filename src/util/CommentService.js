export default function commentsFactory(){
    var comments = {
        "2": [{
            "user": "Avishek Dalal",
            "message": "I didn't like your function name"
        }]
    };

    var setComment = function(line, message, user){
        var _line = line.toString();
        if(!comments[_line])
            comments[_line] = [];
            comments[_line].push({
                "user": user,
                "message": message
            })
    }

    var getComment = function(line){
        var _line = line.toString();
        if(comments[_line])
            return comments[_line];
        return [];
    }

    var api = function(){
        return ({
            "get": getComment,
            "set": setComment
        });
    }

    return api();

}