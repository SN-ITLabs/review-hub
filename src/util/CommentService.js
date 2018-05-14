export default function commentsFactory(fileKey){
    console.log(fileKey);
    var comments = {};
    var file = fileKey;
    var setComment = function(line, message, user){
        var _line = line.toString();
        if(!comments[file])
            comments[file] = {};
        if(!comments[file][_line])
            comments[file][_line] = [];
        comments[file][_line].push({
            "user": user,
            "message": message
        })
        //console.log(comments);
        window.localStorage.setItem("commentStorage", JSON.stringify(comments));
    }

    var getComment = function(line){
        var _line = line.toString();
        if(comments[file] && comments[file][_line])
            return comments[file][_line];
        return [];
    }

    var api = function(){
        if(window.localStorage.getItem("commentStorage"))
            comments = JSON.parse(window.localStorage.getItem("commentStorage"));
        return ({
            "get": getComment,
            "set": setComment
        });
    }

    return api();

}