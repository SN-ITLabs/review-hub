import React, { Component } from 'react';
import { getDefaultListCriteria } from '../util/globalhelper'

class Search extends Component {

    seachFor(e) {
        e.preventDefault();
        const searchkey = this.searchkey.value;
        console.log(searchkey);
        return false;
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={(e) => this.seachFor(e)}>
                    <label htmlFor="main-search">Search</label>
                    <input id="main-search" type="text" placeholder="my team" required
                        defaultValue={getDefaultListCriteria()}
                        ref={(input) => { this.searchkey = input }} />
                    <button type="submit">Search</button>
                </form>

            </div>
        );
    }
}

export default Search;