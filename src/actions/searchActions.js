import { IS_LOCAL } from "../util/Constants";
import { SNAjax } from "../util/globalhelper";

import thunk from "redux-thunk";

export function getChangeSetsForReviewSuccess(response) {
    return {
        type: "FETCH_ALL_CHANGE_SETS",
        payload: {
            data: response
        }
    };
}

export function setLoadingIcon(fetch) {
    return {
        type: "LOADING_INDICATOR",
        payload: {
            fetching: fetch
        }
    };
}

export function getChangeSetsForReview() {
    return dispatch => {
        dispatch(setLoadingIcon(true));
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getChangeSetsInReview",
            scope: "x_snc_review_hub"
        })
            .getJSON()
            .then(function(response) {
                dispatch(getChangeSetsForReviewSuccess(response));
                console.log("In Success");
                //console.log(JSON.stringify(response.data));
            })
            .catch(function(error) {
                console.log("In Error");
                dispatch(setLoadingIcon(false));
                //console.dir(error.response);
            });
    };
}

export function fetchDefaultSearchCriteria() {
    return {
        type: "DEFAULT_SEARCH",
        payload: {
            teams: ["My Reviews", "Team Reviews", "All Reviews"]
        }
    };
}

export function getAllUpdateSets() {
    /* if (!IS_LOCAL) {
        //var chGA = new GlideAjax();
    } else*/
    return {
        type: "FETCH_ALL_UPDATE_SETS",
        payload: {
            updateSetList: [
                {
                    name: "STRY48944 Partner portal dev changes",
                    sys_id: "484994",
                    payload: {},
                    description: "this is my test updateset",
                    files: [
                        {
                            name: "ppdevuitl.js",
                            sys_id: "748484",
                            description: "provides the utility functions for the pp",
                            userProfiles: [
                                {
                                    name: "David Hub",
                                    sys_id: "489494",
                                    description: "Customer relation ships manager"
                                },
                                {
                                    name: "Ruther Furd",
                                    sys_id: "48944",
                                    description: "Engagement manager"
                                }
                            ]
                        },
                        {
                            name: "deputil.js",
                            sys_id: "48944",
                            description: "provides the dep functions for the pp",
                            userProfiles: [
                                {
                                    name: "David Hub",
                                    sys_id: "489494",
                                    description: "Customer relation ships manager"
                                },
                                {
                                    name: "Ruther Furd",
                                    sys_id: "48944",
                                    description: "Engagement manager"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "STRY49494 PS Operations dev changes",
                    sys_id: "4849956",
                    payload: {},
                    description: "another update set to testing the values",
                    files: [
                        {
                            name: "ppdevuitl.js",
                            sys_id: "748484",
                            description: "provides the utility functions for the pp",
                            userProfiles: [
                                {
                                    name: "Refred Hub",
                                    sys_id: "489494",
                                    description: "Customer relation ships manager"
                                },
                                {
                                    name: "Ruther Furd",
                                    sys_id: "48944",
                                    description: "Engagement manager"
                                }
                            ]
                        },
                        {
                            name: "deputil.js",
                            sys_id: "48944",
                            description: "provides the dep functions for the pp",
                            userProfiles: [
                                {
                                    name: "Refred Hub",
                                    sys_id: "489494",
                                    description: "Customer relation ships manager"
                                },
                                {
                                    name: "Ruther Furd",
                                    sys_id: "48944",
                                    description: "Engagement manager"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "STRY379393 CPQ dev changes ",
                    sys_id: "48499474",
                    payload: {},
                    description: "keep the track of deploymnet testing",
                    files: [
                        {
                            name: "ppdevuitl.js",
                            sys_id: "748484",
                            description: "provides the utility functions for the pp",
                            userProfiles: [
                                {
                                    name: "Refred Hub",
                                    sys_id: "489494",
                                    description: "Customer relation ships manager"
                                },
                                {
                                    name: "Ruther Furd",
                                    sys_id: "48944",
                                    description: "Engagement manager"
                                }
                            ]
                        },
                        {
                            name: "deputil.js",
                            sys_id: "48944",
                            description: "provides the dep functions for the pp",
                            userProfiles: [
                                {
                                    name: "Refred Hub",
                                    sys_id: "489494",
                                    description: "Customer relation ships manager"
                                },
                                {
                                    name: "Ruther Furd",
                                    sys_id: "48944",
                                    description: "Engagement manager"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "STRY380303 Sales alert implementation",
                    sys_id: "48493738",
                    payload: {},
                    description: "implementing opportuntiy testings",
                    files: [
                        {
                            name: "ppdevuitl.js",
                            sys_id: "748484",
                            description: "provides the utility functions for the pp",
                            userProfiles: [
                                {
                                    name: "Refred Hub",
                                    sys_id: "489494",
                                    description: "Customer relation ships manager"
                                },
                                {
                                    name: "Ruther Furd",
                                    sys_id: "48944",
                                    description: "Engagement manager"
                                }
                            ]
                        },
                        {
                            name: "deputil.js",
                            sys_id: "48944",
                            description: "provides the dep functions for the pp",
                            userProfiles: [
                                {
                                    name: "Refred Hub",
                                    sys_id: "489494",
                                    description: "Customer relation ships manager"
                                },
                                {
                                    name: "Ruther Furd",
                                    sys_id: "48944",
                                    description: "Engagement manager"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "STRY83030 Demo changes on sales territories",
                    sys_id: "3033030",
                    payload: {},
                    description: "contracts reagaring ps vendors",
                    files: [
                        {
                            name: "ppdevuitl.js",
                            sys_id: "748484",
                            description: "provides the utility functions for the pp",
                            userProfiles: [
                                {
                                    name: "Refred Hub",
                                    sys_id: "489494",
                                    description: "Customer relation ships manager"
                                },
                                {
                                    name: "Ruther Furd",
                                    sys_id: "48944",
                                    description: "Engagement manager"
                                }
                            ]
                        },
                        {
                            name: "deputil.js",
                            sys_id: "48944",
                            description: "provides the dep functions for the pp",
                            userProfiles: [
                                {
                                    name: "Refred Hub",
                                    sys_id: "489494",
                                    description: "Customer relation ships manager"
                                },
                                {
                                    name: "Ruther Furd",
                                    sys_id: "48944",
                                    description: "Engagement manager"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };
}
