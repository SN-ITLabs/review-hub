import { SNAjax } from "../util/globalhelper";

export default function commentsFactory(changeKey,fileKey,fieldName){
    console.log(fileKey);
    var comments = {};
    var file = fileKey;
    var change = changeKey;
    var fieldName = fieldName;
    var setComment = function(line, message, user,callback,commenter){
        var _line = line.toString();
        SNAjax({
            processor: "ChangeSetAjax",
            action: "setCommentFile",
            scope: "x_snc_review_hub",
            params: {
                sysparam_fileid : file,
                sysparam_changeid: change,
                sysparam_linenum: _line,
                sysparam_message: message,
                sysparam_fieldName: fieldName,
                sysparam_commenter : commenter
               // sysparam_user : user
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
                sysparam_changeid: change,
                sysparam_fieldName : fieldName
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
        // if(comments[file] && comments[file][_line])
        //     return comments[file][_line];

        if(comments[change + "_" + fieldName] && comments[change + "_" + fieldName][_line])
            return comments[change + "_" + fieldName][_line];
        return [];
    }

    var api = function(){
            //dispatch(setLoadingIcon(true))
          updateComments();
        return ({
            "get": getComment,
            "set": setComment
        });
    }

    return api();

}