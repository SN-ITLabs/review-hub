import {IS_LOCAL} from '../util/Constants';

export default function GlideAjax(){
    if(IS_LOCAL)
        return () => {};
    else 
        return window.GlideAjax;
}

/*if(IS_LOCAL){

}

if(!IS_LOCAL){
    var ga = new GlideAjax('x_snc_review_hub.ChangeSetAjax');
    ga.addParam('sysparm_name', 'getChangeSetsInReview');
    ga.setScope('x_snc_review_hub');
    ga.getXML(result);

    function result(response){
        console.log("testing...");
        console.dir(response);
    }
 }
*/
export function getDefaultListCriteria() {
    return 'My Team';
}
