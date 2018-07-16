import React from 'react'
import {Treebeard} from 'react-treebeard';
import UpdateSet from '../containers/UpdateSetContainer';
import { changesetReviewReject, saveReviewerNavigationTree } from '../actions/ReviewActions';

export default class extends React.Component{
    constructor(props, context) {
      super(props, context);
      this.state = {
        navigationTree: [],
        prevReviewerNavType: null,
        prevReviewerChangeSet: null,
        prevReviewerChange: null,
        prevDeveloperNavType: null,
        prevDeveloperChangeSet: null,
        prevDeveloperChange: null
      };
      this.onToggle = this.onToggle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if('Reviewer' == this.props.personne) {
            this.setState({
                prevReviewerNavType: nextProps.prevReviewerNavType,
                prevReviewerChangeSet: nextProps.prevReviewerChangeSet,
                prevReviewerChange: nextProps.prevReviewerChange,
                changeSets: nextProps.changeSets, 
                navigationTree: []});
        }else{
            this.setState({
                prevDeveloperNavType: nextProps.prevDeveloperNavType,
                prevDeveloperChangeSet: nextProps.prevDeveloperChangeSet,
                prevDeveloperChange: nextProps.prevDeveloperChange,
                changeSets: nextProps.changeSets, 
                navigationTree: []});
        }        
    }
    
    componentDidMount(){
        this.props.loadPendingReviews(this.props.personne);        
    }

    generateFileReviewer(node){
        var fileReviewer = {};
        fileReviewer.changed_by = node.developer;
        fileReviewer.reviewer = node.reviewer;
        return fileReviewer;
    }

    collaspseChangeSets(){
        var navigationTree=this.state.navigationTree;
        var pendingChangeSets=navigationTree[0].children;
        var historyChangeSets= navigationTree[1].children[0].children;
        for(let i=0;i<pendingChangeSets.length;i++){
            pendingChangeSets[i].toggled=false;
        }
        for(let i=0;i<historyChangeSets.length;i++){
            historyChangeSets[i].toggled=false;
        }
        this.setState({ navigationTree  :navigationTree });
    }
        
    onToggle(node, toggled){

        if(node && node.type=="changeset"){
            this.collaspseChangeSets();
        }

        if(this.state.cursor){this.state.cursor.active = false;}
        
        node.active = true;
        
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });

        /*if('Reviewer' == this.props.personne) {                        
            this.props.saveReviewerNavigationTree(this.state.navigationTree);
        }else{
            this.props.saveDeveloperNavigationTree(this.state.navigationTree);
        }*/

        if('review_completed' == node.status){
          return;
        } 
    
        var changesetId = node.id?node.id:'';
        var changeId = node.change_id?node.change_id:'';
        var fieldname = node.name?node.name:'';
        switch(node.type) {
            case "field": 
                this.props.setContentMode("Differ");
                this.props.toggleDifferComp(node.change_id, node.file_id, node.name);  
                var reviewer = this.generateFileReviewer(node);
                this.props.fileReviewers(reviewer);    
                this.props.toggleCommentary(changesetId, changeId, fieldname);                
                break;
            case "file":
                this.props.setContentMode("Commentary");
                this.props.toggleCommentary(changesetId, changeId);  
                break;
            case "changeset":
                this.props.setContentMode("Commentary");
                this.props.toggleCommentary(changesetId);  
                break;
        }          
    }

    loadData() {
        var pendingReviews = [];        
        var completedChanges = [];
        var cancelledReviews=[];

        var navigationTree = this.state.navigationTree;
        console.log("navigationTree");
        console.log(navigationTree);      
        if(navigationTree && navigationTree.length > 0) {
            return navigationTree;
        }
        var changeSets = this.state.changeSets;
        console.log("changeSets: ");
        console.log(changeSets);
        if(!changeSets) {
            return [];
        }
        var changeSetNames = Object.keys(changeSets);
        console.log(changeSetNames);
        if(changeSetNames) {
            changeSetNames.forEach(function(changeSetName) {

                var pendingChangesetObj = {'name': changeSetName, 'id': changeSets[changeSetName].id, 'type': 'changeset', 'toggled': false};
                var completedChangesetObj = {'name': changeSetName, 'id': changeSets[changeSetName].id, 'type': 'changeset', 'toggled': false};
                var cancelledChangesetObj={'name': changeSetName, 'id': changeSets[changeSetName].id, 'type': 'changeset', 'toggled': false};
                
                if(changeSets[changeSetName].files) {
                    var filesByType = [];
                    
                    changeSets[changeSetName].files.forEach(function(file) {
                        var fileName = file.file_name;
                        var type = file.type;
                        var isNew = false;
                        var status = file.status;

                        var instancesByType = filesByType.filter(obj=> obj.name == type && status == obj.status);
                        if(instancesByType && instancesByType.length > 0) {
                            instancesByType = instancesByType[0];
                        }else{
                            isNew = true;
                            instancesByType = {};
                            instancesByType['name'] = type;
                            instancesByType['id'] = type;                            
                            instancesByType['status'] = status;
                            instancesByType['toggled'] = false; 
                            instancesByType['type'] = 'change';                           
                            instancesByType['children'] = [];
                        }
                        let fileObj = {};
                        
                        fileObj['name'] = fileName;
                        fileObj['id'] = fileName;
                        fileObj['change_id'] = file.change_id;
                        fileObj['changeset_id'] = changeSets[changeSetName].id;
                        fileObj['file_id'] = file.file_id;
                        fileObj['reviewer'] = file.reviewer;
                        fileObj['status'] = status; 
                        fileObj['type'] = 'file';     
                        fileObj['toggled'] = false;

                        var fieldsForFile = [];
                        file.fields.forEach(function(field) {
                            let fieldObj = {};
                            if(field.field_name) {
         if(('review_cancelled' != file.status && 'review_in_progress' != file.status) || (('review_cancelled' == file.status || 'review_in_progress' == file.status) && 'Pending' == field.status)){
             
                              //  if('review_in_progress' != file.status || ('review_in_progress' == file.status && 'Pending' == field.status)){
                                    fieldObj['name'] = field.field_name;
                                    fieldObj['id'] = field.field_name;
                                    fieldObj['change_id'] = file.change_id;
                                    fieldObj['file_id'] = file.file_id;
                                    fieldObj['changeset_id'] = changeSets[changeSetName].id;
                                    fieldObj['reviewer'] = file.reviewer;
                                    fieldObj['status'] = status;
                                    fieldObj['actionable'] = true;
                                    fieldObj['type'] = 'field';
                                    fileObj['toggled'] = false;                                
                                    fieldsForFile.push(fieldObj);
                                }                                
                            }                            
                        });
                        if((fieldsForFile && fieldsForFile.length > 0) || 'review_completed' == status  ) {
                            fileObj['children'] = fieldsForFile;
                            instancesByType['children'].push(fileObj);
                        }
                        
                        if(isNew) {
                            filesByType.push(instancesByType);                            
                        }                        
                    });

                    var pendingFiles = filesByType.filter(obj=>obj.status == 'review_in_progress' && obj.children && obj.children.length > 0);
                    var compltedFiles = filesByType.filter(obj=>obj.status == 'review_completed');
                    var cancelledFiles=filesByType.filter(obj=>obj.status == 'review_cancelled');

                    if(pendingFiles && pendingFiles.length > 0) {
                        pendingChangesetObj['children'] = pendingFiles;
                    }
                    if(compltedFiles && compltedFiles.length > 0) {
                        completedChangesetObj['children'] = compltedFiles;
                    }
                    if(cancelledFiles && cancelledFiles.length > 0) {
                        cancelledChangesetObj['children'] = cancelledFiles;
                    }
                }
                if(pendingChangesetObj && pendingChangesetObj.children && pendingChangesetObj.children.length > 0){
                    pendingReviews.push(pendingChangesetObj);
                }
                if(completedChangesetObj && completedChangesetObj.children && completedChangesetObj.children.length > 0){
                    completedChanges.push(completedChangesetObj);
                }
                if(cancelledChangesetObj && cancelledChangesetObj.children && cancelledChangesetObj.children.length > 0){
                    cancelledReviews.push(cancelledChangesetObj);
                }
            

            });
        }

        var navigationTree = [
            {
                name: 'Pending Review',
                id: 'Pending Review',
                toggled: true,
                children: pendingReviews
            }/*,  
            {
                name: 'Activity Stream',
                id: 'Activity Stream',
                toggled: true,
                childern: []
            }*/,  
            {
                name: 'History',
                id: 'History',
                toggled: false,
                children: [
                    {
                        name: 'Completed ChangeSets',
                        id: 'Completed ChangeSets',
                        toggled: true,
                        children: completedChanges
                    }
                ]
            },
            {
                name: 'Cancelled Review',
                id: 'Cancelled Review',
                toggled: false,
                children: cancelledReviews
            }
        ];
        this.setState({'navigationTree': navigationTree});
    }

    render(){     
        //this.setState({'changeSet': this.props.changeSet});
        this.loadData();

        return (
            <Treebeard
                style={navigatorTheme}
                animations={animations}
                data={this.state.navigationTree}
                onToggle={this.onToggle}
            />
        );
    }
}



var navigatorTheme = {
    tree: {
        base: {
            listStyle: 'none',
            backgroundColor: 'white',
            margin: 0,
            padding: 0,
            color: '#7fb7a1',
            fontFamily: 'lucida grande ,tahoma,verdana,arial,sans-serif',
            fontSize: '10px'
        },
        node: {
            base: {
                position: 'relative'
            },
            link: {
                cursor: 'pointer',
                position: 'relative',
                padding: '0px 5px',
                display: 'block'
            },
            activeLink: {
                background: '#7fb7a1'
            },
            toggle: {
                base: {
                    position: 'relative',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    marginLeft: '-5px',
                    height: '24px',
                    width: '24px'
                },
                wrapper: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    margin: '-7px 0 0 -7px',
                    height: '14px'
                },
                height: 10,
                width: 10,
                arrow: {
                    fill: 'black',
                    strokeWidth: 0
                }
            },
            header: {
                base: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    color: 'black'
                },
                connector: {
                    width: '2px',
                    height: '12px',
                    borderLeft: 'solid 2px black',
                    borderBottom: 'solid 2px black',
                    position: 'absolute',
                    top: '0px',
                    left: '-21px'
                },
                title: {
                    lineHeight: '24px',
                    verticalAlign: 'middle'
                }
            },
            subtree: {
                listStyle: 'none',
                paddingLeft: '19px'
            },
            loading: {
                color: '#E2C089'
            }
        }
    }
};

var animations = {
    toggle: ({node: {toggled}}) => ({
        animation: {rotateZ: toggled ? 90 : 0},
        duration: 100
    }),
    drawer: (/* props */) => ({
        enter: {
            animation: 'slideDown',
            duration: 100
        },
        leave: {
            animation: 'slideUp',
            duration: 100
        }
    })
};
