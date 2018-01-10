import React from 'react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

  
  export default class UpdateSetList extends React.Component {
    state = {
      selected: [1],
    };
  
    isSelected = (index) => {
      return this.state.selected.indexOf(index) !== -1;
    };
  
    handleRowSelection = (selectedRows) => {
      this.setState({
        selected: selectedRows,
      });
    };
  
    render() {
      return (
        <div className="updateSetTable">
        <br/>
          <h6> All UpdateSets List</h6>
            <Table onRowSelection={this.handleRowSelection}>
            <TableHeader>
                <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Developer</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow selected={this.isSelected(0)}>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Reviewd</TableRowColumn>
                </TableRow>
                <TableRow selected={this.isSelected(1)}>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Un Reviewd</TableRowColumn>
                </TableRow>
                <TableRow selected={this.isSelected(2)}>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>Reviewd</TableRowColumn>
                </TableRow>
                <TableRow selected={this.isSelected(3)}>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>Reviewd</TableRowColumn>
                </TableRow>
            </TableBody>
            </Table>
        </div>
      );
    }
  }

/*import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Subheader from 'material-ui/Subheader';

import AccountCircle from 'material-ui/svg-icons/action/account-circle';

export default class UpdateSetList extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: !item.state.open,
    });
  };

  render() {
    return (
      <div>
        <br />
          <List>
            <Subheader>All Update Sets</Subheader>
            <ListItem primaryText="UpdateSet1" leftIcon={<AccountCircle />}  secondaryText="this update set contains files"/>
            <ListItem primaryText="UpdateSet2" leftIcon={<AccountCircle />} />
            <ListItem
              primaryText="UpdateSet3"
              leftIcon={<AccountCircle />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="UpdateSet3 in 1"
                  leftIcon={<AccountCircle />}
                />,
                <ListItem
                  key={2}
                  primaryText="UpdateSet3 in 2"
                  leftIcon={<AccountCircle />}
                  nestedItems={[
                    <ListItem key={1} primaryText="UpdateSet3 in 1 in 1" leftIcon={<AccountCircle />} />,
                  ]}
                />,
                <ListItem
                  key={3}
                  primaryText="UpdateSet3 in 3"
                  leftIcon={<AccountCircle />}
                  primaryTogglesNestedList={true}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[
                    <ListItem key={1} primaryText="UpdateSet3 in 1" leftIcon={<AccountCircle />} />,
                  ]}
                />,
              ]}
            />
          </List>
      </div>
    );
  }
}*/






/*import React, { Component } from 'react';

import UpdateSet from './UpdateSet';

class UpdateSetList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.updateSetListData.map(updateSet =>
                        <UpdateSet data={updateSet} key={updateSet.name}></UpdateSet>
                    )}
                </ul>
            </div>

        );
    }
}

export default UpdateSetList;*/