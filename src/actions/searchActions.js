

// write your actions here

export function getChangeSetsForReview(){
    return{
        type:'FETCH_ALL_CHANGE_SETS',
        payload:{
                "Default": {
                  "changed_by": "review hub",
                  "sys_updated_by": "review.hub",
                  "files": [
                    {
                      "update_set": "ReviewHub_changes",
                      "record_name": "Local Change.u_review_number",
                      "name": "sys_documentation_sys_sync_change_u_review_number_en",
                      "paload": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><record_update><sys_documentation action=\"DELETE\" element=\"u_review_number\" label=\"Review Number\" language=\"en\" table=\"sys_sync_change\"><sys_documentation action=\"DELETE\"><element>u_review_number</element><help/><hint/><label>Review Number</label><language>en</language><name>sys_sync_change</name><plural>Review Numbers</plural><sys_class_name>sys_documentation</sys_class_name><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-23 06:56:09</sys_created_on><sys_customer_update>false</sys_customer_update><sys_id>457b7a0e6f7f4700f928c8c17c3ee4ae</sys_id><sys_mod_count>0</sys_mod_count><sys_name>Review Number</sys_name><sys_package display_value=\"Global\" source=\"global\">global</sys_package><sys_policy/><sys_replace_on_upgrade>false</sys_replace_on_upgrade><sys_scope display_value=\"Global\">global</sys_scope><sys_update_name>sys_documentation_sys_sync_change_u_review_number_en</sys_update_name><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-23 06:56:09</sys_updated_on><url/><url_target/></sys_documentation></sys_documentation></record_update>",
                      "changed_by": "review hub",
                      "sys_updated_by": "review.hub"
                    }
                  ]
                },
                "STR77779977 - test": {
                  "changed_by": "review hub",
                  "sys_updated_by": "review.hub",
                  "files": [
                    {
                      "update_set": "ReviewHub_changes",
                      "record_name": "Local Change.ChangeSet Name",
                      "name": "sys_dictionary_sys_sync_change_u_changeset_name",
                      "paload": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><record_update><sys_dictionary action=\"INSERT_OR_UPDATE\" element=\"u_changeset_name\" table=\"sys_sync_change\"><active>true</active><array>false</array><array_denormalized>false</array_denormalized><attributes/><audit>false</audit><calculation><![CDATA[(function calculatedFieldValue(current) {\n\n\t// Add your code here\n\treturn '';  // return the calculated value\n\n})(current);]]></calculation><choice/><choice_field/><choice_table/><column_label>ChangeSet Name</column_label><comments/><create_roles/><default_value/><defaultsort/><delete_roles/><dependent/><dependent_on_field/><display>false</display><dynamic_creation>false</dynamic_creation><dynamic_creation_script/><dynamic_default_value/><dynamic_ref_qual/><element>u_changeset_name</element><element_reference>false</element_reference><foreign_database/><internal_type display_value=\"String\">string</internal_type><mandatory>false</mandatory><max_length>100</max_length><name>sys_sync_change</name><next_element/><primary>false</primary><read_only>false</read_only><read_roles/><reference/><reference_cascade_rule/><reference_floats>false</reference_floats><reference_key/><reference_qual/><reference_qual_condition/><reference_type/><sizeclass/><spell_check>false</spell_check><staged>false</staged><sys_class_name>sys_dictionary</sys_class_name><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-23 10:55:48</sys_created_on><sys_customer_update>true</sys_customer_update><sys_id>e6227b4a6fff4700f928c8c17c3ee4ea</sys_id><sys_mod_count>2</sys_mod_count><sys_name>ChangeSet Name</sys_name><sys_package display_value=\"Global\" source=\"global\">global</sys_package><sys_policy/><sys_replace_on_upgrade>false</sys_replace_on_upgrade><sys_scope display_value=\"Global\">global</sys_scope><sys_update_name>sys_dictionary_sys_sync_change_u_changeset_name</sys_update_name><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-25 06:03:46</sys_updated_on><table_reference>false</table_reference><text_index>false</text_index><unique>false</unique><use_dependent_field>false</use_dependent_field><use_dynamic_default>false</use_dynamic_default><use_reference_qualifier>simple</use_reference_qualifier><virtual>false</virtual><widget/><write_roles/><xml_view>false</xml_view></sys_dictionary></record_update>",
                      "changed_by": "review hub",
                      "sys_updated_by": "review.hub"
                    },
                    {
                      "update_set": "Default",
                      "record_name": "local_test",
                      "name": "sys_script_include_310545ba4f3f8700afef74828110c79f",
                      "paload": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><record_update table=\"sys_script_include\"><sys_script_include action=\"INSERT_OR_UPDATE\"><access>package_private</access><active>true</active><api_name>global.local_test</api_name><client_callable>false</client_callable><description/><name>local_test</name><script><![CDATA[var local_test = Class.create();\nlocal_test.prototype = {\n    initialize: function() {\n    },\n\n    type: 'local_test'\n};]]></script><sys_class_name>sys_script_include</sys_class_name><sys_created_by>pradeep</sys_created_by><sys_created_on>2018-01-25 06:14:28</sys_created_on><sys_customer_update>true</sys_customer_update><sys_id>310545ba4f3f8700afef74828110c79f</sys_id><sys_mod_count>0</sys_mod_count><sys_name>local_test</sys_name><sys_package display_value=\"Global\" source=\"global\">global</sys_package><sys_policy/><sys_replace_on_upgrade>false</sys_replace_on_upgrade><sys_scope display_value=\"Global\">global</sys_scope><sys_update_name>sys_script_include_310545ba4f3f8700afef74828110c79f</sys_update_name><sys_updated_by>pradeep</sys_updated_by><sys_updated_on>2018-01-25 06:14:28</sys_updated_on></sys_script_include></record_update>",
                      "changed_by": "pradeep gour",
                      "sys_updated_by": "review.hub"
                    },
                    {
                      "update_set": "ReviewHub_changes",
                      "record_name": "Local Change",
                      "name": "sys_ui_list_sys_sync_change_null",
                      "paload": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><record_update><sys_ui_list parent=\"\" relationship=\"\" sys_domain=\"global\" table=\"sys_sync_change\" version=\"2\" view=\"\"><sys_ui_list_element action=\"INSERT_OR_UPDATE\"><average_value>false</average_value><element>version.record_name</element><list_id display_value=\"sys_sync_change\" element=\"NULL\" name=\"sys_sync_change\" parent=\"NULL\" relationship=\"NULL\" sys_domain=\"global\" view=\"Default view\">5c9f25404f005b00afef74828110c722</list_id><max_value>false</max_value><min_value>false</min_value><position>0</position><sum>false</sum><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-29 06:32:26</sys_created_on><sys_id>d09f25404f005b00afef74828110c723</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-29 06:32:26</sys_updated_on></sys_ui_list_element><sys_ui_list_element action=\"INSERT_OR_UPDATE\"><average_value>false</average_value><element>version.type</element><list_id display_value=\"sys_sync_change\" element=\"NULL\" name=\"sys_sync_change\" parent=\"NULL\" relationship=\"NULL\" sys_domain=\"global\" view=\"Default view\">5c9f25404f005b00afef74828110c722</list_id><max_value>false</max_value><min_value>false</min_value><position>1</position><sum>false</sum><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-29 06:32:26</sys_created_on><sys_id>549f25404f005b00afef74828110c723</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-29 06:32:26</sys_updated_on></sys_ui_list_element><sys_ui_list_element action=\"INSERT_OR_UPDATE\"><average_value>false</average_value><element>version.application</element><list_id display_value=\"sys_sync_change\" element=\"NULL\" name=\"sys_sync_change\" parent=\"NULL\" relationship=\"NULL\" sys_domain=\"global\" view=\"Default view\">5c9f25404f005b00afef74828110c722</list_id><max_value>false</max_value><min_value>false</min_value><position>2</position><sum>false</sum><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-29 06:32:26</sys_created_on><sys_id>d49f25404f005b00afef74828110c723</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-29 06:32:26</sys_updated_on></sys_ui_list_element><sys_ui_list_element action=\"INSERT_OR_UPDATE\"><average_value>false</average_value><element>changed_by</element><list_id display_value=\"sys_sync_change\" element=\"NULL\" name=\"sys_sync_change\" parent=\"NULL\" relationship=\"NULL\" sys_domain=\"global\" view=\"Default view\">5c9f25404f005b00afef74828110c722</list_id><max_value>false</max_value><min_value>false</min_value><position>3</position><sum>false</sum><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-29 06:32:26</sys_created_on><sys_id>589f25404f005b00afef74828110c723</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-29 06:32:26</sys_updated_on></sys_ui_list_element><sys_ui_list_element action=\"INSERT_OR_UPDATE\"><average_value>false</average_value><element>update_set</element><list_id display_value=\"sys_sync_change\" element=\"NULL\" name=\"sys_sync_change\" parent=\"NULL\" relationship=\"NULL\" sys_domain=\"global\" view=\"Default view\">5c9f25404f005b00afef74828110c722</list_id><max_value>false</max_value><min_value>false</min_value><position>4</position><sum>false</sum><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-29 06:32:26</sys_created_on><sys_id>d89f25404f005b00afef74828110c723</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-29 06:32:26</sys_updated_on></sys_ui_list_element><sys_ui_list_element action=\"INSERT_OR_UPDATE\"><average_value>false</average_value><element>version.sys_updated_on</element><list_id display_value=\"sys_sync_change\" element=\"NULL\" name=\"sys_sync_change\" parent=\"NULL\" relationship=\"NULL\" sys_domain=\"global\" view=\"Default view\">5c9f25404f005b00afef74828110c722</list_id><max_value>false</max_value><min_value>false</min_value><position>5</position><sum>false</sum><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-29 06:32:26</sys_created_on><sys_id>5c9f25404f005b00afef74828110c723</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-29 06:32:26</sys_updated_on></sys_ui_list_element><sys_ui_list action=\"INSERT_OR_UPDATE\"><average_value>false</average_value><element/><max_value>false</max_value><min_value>false</min_value><name>sys_sync_change</name><parent/><position/><relationship/><sum>false</sum><sys_class_name>sys_ui_list</sys_class_name><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-29 06:32:26</sys_created_on><sys_customer_update>true</sys_customer_update><sys_domain>global</sys_domain><sys_domain_path>/</sys_domain_path><sys_id>5c9f25404f005b00afef74828110c722</sys_id><sys_mod_count>0</sys_mod_count><sys_name>sys_sync_change</sys_name><sys_package display_value=\"Team Development\" source=\"com.snc.apps_hub\">81d664264f123200afef74828110c7b8</sys_package><sys_policy/><sys_replace_on_upgrade>false</sys_replace_on_upgrade><sys_scope display_value=\"Global\">global</sys_scope><sys_update_name>sys_ui_list_sys_sync_change_null</sys_update_name><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-29 06:32:26</sys_updated_on><sys_user/><view display_value=\"Default view\" name=\"NULL\">Default view</view><view_name/></sys_ui_list></sys_ui_list></record_update>",
                      "changed_by": "review hub",
                      "sys_updated_by": "review.hub"
                    },
                    {
                      "update_set": "ReviewHub_changes",
                      "record_name": "Local Change.State",
                      "name": "sys_choice_sys_sync_change_state",
                      "paload": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><record_update><sys_choice action=\"INSERT_OR_UPDATE\" field=\"state\" table=\"sys_sync_change\" version=\"3\"><sys_choice action=\"INSERT_OR_UPDATE\"><dependent_value/><element>state</element><hint/><inactive>false</inactive><label>New</label><language>en</language><name>sys_sync_change</name><sequence>0</sequence><sys_created_by>system</sys_created_by><sys_created_on>2017-04-25 23:38:28</sys_created_on><sys_domain>global</sys_domain><sys_domain_path>/</sys_domain_path><sys_id>2dd6a4264f123200afef74828110c721</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>system</sys_updated_by><sys_updated_on>2017-04-25 23:38:28</sys_updated_on><value>new</value></sys_choice><sys_choice action=\"INSERT_OR_UPDATE\"><dependent_value/><element>state</element><hint/><inactive>false</inactive><label>Pending Push</label><language>en</language><name>sys_sync_change</name><sequence>1</sequence><sys_created_by>system</sys_created_by><sys_created_on>2017-04-25 23:38:28</sys_created_on><sys_domain>global</sys_domain><sys_domain_path>/</sys_domain_path><sys_id>6dd6a4264f123200afef74828110c721</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>system</sys_updated_by><sys_updated_on>2017-04-25 23:38:28</sys_updated_on><value>pending_push</value></sys_choice><sys_choice action=\"INSERT_OR_UPDATE\"><dependent_value/><element>state</element><hint/><inactive>false</inactive><label>Ignored</label><language>en</language><name>sys_sync_change</name><sequence>2</sequence><sys_created_by>system</sys_created_by><sys_created_on>2017-04-25 23:38:28</sys_created_on><sys_domain>global</sys_domain><sys_domain_path>/</sys_domain_path><sys_id>add6a4264f123200afef74828110c721</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>system</sys_updated_by><sys_updated_on>2017-04-25 23:38:28</sys_updated_on><value>ignored</value></sys_choice><sys_choice action=\"INSERT_OR_UPDATE\"><dependent_value/><element>state</element><hint/><inactive>false</inactive><label>Queued</label><language>en</language><name>sys_sync_change</name><sequence>3</sequence><sys_created_by>system</sys_created_by><sys_created_on>2017-04-25 23:38:28</sys_created_on><sys_domain>global</sys_domain><sys_domain_path>/</sys_domain_path><sys_id>edd6a4264f123200afef74828110c721</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>system</sys_updated_by><sys_updated_on>2017-04-25 23:38:28</sys_updated_on><value>queued</value></sys_choice><sys_choice action=\"INSERT_OR_UPDATE\"><dependent_value/><element>state</element><hint/><inactive>false</inactive><label>Reviewed</label><language>en</language><name>sys_sync_change</name><sequence>5</sequence><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-22 10:35:30</sys_created_on><sys_domain>global</sys_domain><sys_domain_path>/</sys_domain_path><sys_id>f3f3a23d4ff34700afef74828110c77c</sys_id><sys_mod_count>2</sys_mod_count><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-23 12:02:26</sys_updated_on><value>surf_codereviewd</value></sys_choice><sys_choice action=\"INSERT_OR_UPDATE\"><dependent_value/><element>state</element><hint/><inactive>false</inactive><label>Review In Progress</label><language>en</language><name>sys_sync_change</name><sequence>6</sequence><sys_created_by>review.hub</sys_created_by><sys_created_on>2018-01-23 05:50:26</sys_created_on><sys_domain>global</sys_domain><sys_domain_path>/</sys_domain_path><sys_id>474ce2066f7f4700f928c8c17c3ee49f</sys_id><sys_mod_count>0</sys_mod_count><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-23 05:50:26</sys_updated_on><value>review_in_progress</value></sys_choice><sys_choice_set action=\"INSERT_OR_UPDATE\"><element>state</element><name>sys_sync_change</name><sys_class_name>sys_choice_set</sys_class_name><sys_created_by>system</sys_created_by><sys_created_on>2017-04-25 23:38:28</sys_created_on><sys_customer_update>false</sys_customer_update><sys_id>e1d6a4264f123200afef74828110c722</sys_id><sys_mod_count>3</sys_mod_count><sys_name>state</sys_name><sys_package display_value=\"Team Development\" source=\"com.snc.apps_hub\">81d664264f123200afef74828110c7b8</sys_package><sys_policy/><sys_replace_on_upgrade>false</sys_replace_on_upgrade><sys_scope display_value=\"Global\">global</sys_scope><sys_update_name>sys_choice_sys_sync_change_state</sys_update_name><sys_updated_by>review.hub</sys_updated_by><sys_updated_on>2018-01-23 12:02:02</sys_updated_on></sys_choice_set></sys_choice></record_update>",
                      "changed_by": "review hub",
                      "sys_updated_by": "review.hub"
                    }
                  ]
                }
              }
    }
}


export function fetchDefaultSearchCriteria(){
    return{
        type:'DEFAULT_SEARCH',
        payload:{
            teams : ["My UpdateSets","My Team UpdateSets","My Coleges"]
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
