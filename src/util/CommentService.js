import { SNAjax } from "../util/globalhelper";

export default function commentsFactory(fileKey){
    console.log(fileKey);
    var comments = {};
    var file = fileKey;
    var setComment = function(line, message, user,callback){
        var _line = line.toString();
        SNAjax({
            processor: "ChangeSetAjax",
            action: "setCommentFile",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeid: file,
                sysparam_linenum: _line,
                sysparam_message: message,
                sysparam_user : user
            }
        }).getJSON()
            .then(function(response) {
                updateComments(callback);
                console.log("In Success for getdiff");
               // dispatch(setLoadingIcon(false));
            })
            .catch(function(error) {
                console.log("In Error");
              //  dispatch(setLoadingIcon(false));
            });

        
        //console.log(comments);
       // window.localStorage.setItem("commentStorage", JSON.stringify(comments));
    }

    function updateComments(callback){
        SNAjax({
            processor: "ChangeSetAjax",
            action: "getCommentsforFile",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeid: file
            }
        }).getJSON()
            .then(function(response) {
                comments = response;
                if(callback){
                    callback();
                }
                console.log("In Success for getdiff");
               // dispatch(setLoadingIcon(false));
            })
            .catch(function(error) {
                console.log("In Error");
              //  dispatch(setLoadingIcon(false));
            });

    }

    var getComment = function(line){
        var _line = line.toString();
        if(comments[file] && comments[file][_line])
            return comments[file][_line];
        return [];
    }

    var api = function(){
            //dispatch(setLoadingIcon(true))
          updateComments();

        // if(window.localStorage.getItem("commentStorage"))
          /// comments = {"16628de26fc65b80f928c8c17c3ee46d":{"12":[{"user":"Haribabu Garbhan","message":"this sis my testing "}]}};

        return ({
            "get": getComment,
            "set": setComment
        });
    }

    return api();

}