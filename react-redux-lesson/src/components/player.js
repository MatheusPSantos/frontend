import React from 'react';
import { connect } from 'react-redux';


function Player({ selectedCategory, selectedMovie }) {
    return (
        <section className='player'>
            <h1 className='player-container'>
                {selectedCategory.name}
            </h1>
            <h2>{selectedMovie.title}</h2>
        </section>
    );
}

const mapStateToProps = (store) => ({
    selectedCategory: store.MovieReducer.selectedCategory,
    selectedMovie: store.MovieReducer.selectedMovie
});

export default connect(mapStateToProps)(Player);