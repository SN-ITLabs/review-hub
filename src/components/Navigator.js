import React from 'react'
import {Treebeard} from 'react-treebeard';
import UpdateSet from '../containers/UpdateSetContainer';

export default class extends React.Component{
    constructor(props, context) {
      super(props, context);
      this.state = {
        navigationTree: []
      };
      this.onToggle = this.onToggle.bind(this);
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
        
    onToggle(node, toggled){
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });

        if('review_completed' == node.status){
          return;
        } else {            
            if(node.actionable && node.change_id) {
                this.props.setContentMode("Differ");
                this.props.toggleDifferComp(node.change_id, node.file_id, node.name);  
                var reviewer = this.generateFileReviewer(node);
                this.props.fileReviewers(reviewer);    
            }
        }   
    }

    loadData() {
        var pendingReviews = [];        
        var completedChanges = [];

        var navigationTree = this.state.navigationTree;
        if(navigationTree && navigationTree.length > 0) {
            return navigationTree;
        }

        var changeSets = this.state.changeSets;
        if(!changeSets) {
            return [];
        }
        var changeSetNames = Object.keys(changeSets);
        console.log(changeSetNames);
        if(changeSetNames) {
            changeSetNames.forEach(function(changeSetName) {

                var pendingChangesetObj = {'name': changeSetName, 'id': changeSetName};
                var completedChangesetObj = {'name': changeSetName, 'id': changeSetName};

                if(changeSets[changeSetName].files) {
                    var filesByType = [];
                    
                    changeSets[changeSetName].files.forEach(function(file) {
                        var fileName = file.file_name;
                        var type = file.type;
                        var isNew = false;
                        var status = file.status;

                        var instancesByType = filesByType.filter(obj=>obj.name == type);
                        if(instancesByType && instancesByType.length > 0) {
                            instancesByType = instancesByType[0];
                        }else{
                            isNew = true;
                            instancesByType = {};
                            instancesByType['name'] = type;
                            instancesByType['id'] = type;
                            instancesByType['status'] = status;
                            instancesByType['children'] = [];
                        }
                        var fileObj = {};
                        
                        fileObj['name'] = fileName;
                        fileObj['id'] = fileName;
                        fileObj['change_id'] = file.change_id;
                        fileObj['file_id'] = file.file_id;
                        fileObj['reviewer'] = file.reviewer;
                        fileObj['status'] = status;                        
                        var fieldsForFile = [];
                        file.fields.forEach(function(field) {
                            var fieldObj = {};
                            if(field.field_name) {
                                fieldObj['name'] = field.field_name;
                                fieldObj['id'] = field.field_name;
                                fieldObj['change_id'] = file.change_id;
                                fieldObj['file_id'] = file.file_id;
                                fieldObj['reviewer'] = file.reviewer;
                                fieldObj['status'] = status;
                                fieldObj['actionable'] = true;
                                fieldsForFile.push(fieldObj);
                            }                            
                        });
                        if(fieldsForFile && fieldsForFile.length > 0) {
                            fileObj['children'] = fieldsForFile;
                            instancesByType['children'].push(fileObj);
                        }
                        
                        if(isNew) {
                            filesByType.push(instancesByType);                            
                        }                        
                    });

                    var pendingFiles = filesByType.filter(obj=>obj.status == 'review_in_progress');
                    var compltedFiles = filesByType.filter(obj=>obj.status == 'review_completed');

                    pendingChangesetObj['children'] = pendingFiles;
                    completedChangesetObj['children'] = compltedFiles;
                }
                if(pendingChangesetObj.children.length > 0){
                    pendingReviews.push(pendingChangesetObj);
                }
                if(completedChangesetObj.children.length > 0){
                    completedChanges.push(completedChangesetObj);
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
                toggled: true,
                children: [
                    {
                        name: 'Completed ChangeSets',
                        id: 'Completed ChangeSets',
                        children: completedChanges
                    }
                ]
            }
        ];
        this.setState({'navigationTree': navigationTree});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ changeSets: nextProps.changeSets, navigationTree: [] });  
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
            fontSize: '14px'
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
                height: 14,
                width: 14,
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
