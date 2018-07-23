import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { Toolbar} from 'react-data-grid-addons';
const {
  Data: { Selectors }
  } = require('react-data-grid-addons');

var RecommendationList = class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      {
        key: 'id',
        name: 'ID',
        width: 80
      },
      {
        key: 'category',
        name: 'Category',
        filterable: true,
        sortable: true
      },
      {
        key: 'description',
        name: 'Description',
        filterable: true,
        sortable: true
      }/*,
      {
        key: 'issueType',
        name: 'Issue Type',
        filterable: true,
        sortable: true
      },
      {
        key: 'complete',
        name: '% Complete',
        filterable: true,
        sortable: true
      },
      {
        key: 'startDate',
        name: 'Start Date',
        filterable: true,
        sortable: true
      },
      {
        key: 'completeDate',
        name: 'Expected Complete',
        filterable: true,
        sortable: true
      }*/
    ];

    this.state = {rows: this.props.rows,filters: {}, sortColumn: null, sortDirection: null };
  }

  componentDidMount(){
    this.props.fetchRecomendations(this.props.details.type);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      rows : nextProps.rows
    })
  }

  getRows = () => {
    return Selectors.getRows(this.state);
  };

  getSize = () => {
    return this.getRows().length;
  };

  rowGetter = (rowIdx) => {
    const rows = this.getRows();
    return rows[rowIdx];
  };

  handleGridSort = (sortColumn, sortDirection) => {

    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };

    sortDirection === 'NONE' ? this.state.rows.slice(0) : this.state.rows.sort(comparer);

    //this.setState({ rows });

   // this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
  };

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }

    this.setState({ filters: newFilters });
  };

  onClearFilters = () => {
    this.setState({ filters: {} });
  };

  render() {
    return  (
      <ReactDataGrid
        onGridSort={this.handleGridSort}
        enableCellSelect={true}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.getSize()}
        minHeight={500}
        toolbar={<Toolbar enableFilter={true}/>}
        onAddFilter={this.handleFilterChange}
        onClearFilters={this.onClearFilters} />);
  }
};

export default RecommendationList;