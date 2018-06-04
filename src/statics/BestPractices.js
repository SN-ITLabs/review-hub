var BestPractices = {
    Security: [
        { description: 'When datatype is changed for existing columns are we considering unique constraints on indexes?', 
            type: 'tables,indexes'
        }, { description: 'When using jelly template for the UI, are we making sure that we aren\’t using the ${} for variable processing? If the template name starts with $ , that file is rendered . If not var_form_name variable should be set.',         
         type: ''
        }],
    Integrations: [
        { description: 'When datatype is changed for existing columns are we considering unique constraints on indexes?', 
            type: 'tables,indexes'
        }, { description: 'When using jelly template for the UI, are we making sure that we aren\’t using the ${} for variable processing? If the template name starts with $ , that file is rendered . If not var_form_name variable should be set.',         
         type: ''
        }],
    Performance: [
        { description: 'When datatype is changed for existing columns are we considering unique constraints on indexes?', 
            type: 'tables,indexes'
        }, { description: 'When using jelly template for the UI, are we making sure that we aren\’t using the ${} for variable processing? If the template name starts with $ , that file is rendered . If not var_form_name variable should be set.',         
         type: ''
        }],
    Imports: [
        { description: 'When datatype is changed for existing columns are we considering unique constraints on indexes?', 
            type: 'tables,indexes'
        }, { description: 'When using jelly template for the UI, are we making sure that we aren\’t using the ${} for variable processing? If the template name starts with $ , that file is rendered . If not var_form_name variable should be set.',         
         type: ''
        }],
    Notifications: [
        { description: 'When datatype is changed for existing columns are we considering unique constraints on indexes?', 
            type: 'tables,indexes'
        }, { description: 'When using jelly template for the UI, are we making sure that we aren\’t using the ${} for variable processing? If the template name starts with $ , that file is rendered . If not var_form_name variable should be set.',         
         type: ''
        }]
};

module.exports = BestPractices;