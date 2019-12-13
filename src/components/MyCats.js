import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCats } from '../store/actions';

class MyCats extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    } else if (this.props.cats) {
      return (
        <div>
          {this.props.cats.map(cat => (
            <div key={cat._id}>{cat.name}</div>
          ))}
        </div>
      );
    } else {
      return <div className="loading">Loading Cats...</div>;
    }
  }
}

