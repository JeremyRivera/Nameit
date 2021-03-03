import React from 'react';
import "./ResultsContainer.css";
import PropTypes from 'prop-types';
import NameCard from '../NameCard/NameCard';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamesList = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });

    return (
        <div className="results-container">
            {suggestedNamesList}
        </div>
    )
};

ResultsContainer.propTypes = {
    text: PropTypes.string
};

export default ResultsContainer;