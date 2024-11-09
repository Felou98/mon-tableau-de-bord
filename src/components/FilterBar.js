// components/FilterBar.js
import React from 'react';

const FilterBar = ({ onFilterChange }) => {
    return (
        <div>
            <h3>Filtrer par saison</h3>
            <select onChange={(e) => onFilterChange(e.target.value)}>
                <option value="">Tous</option>
                <option value="été">Été</option>
                <option value="printemps">Printemps</option>
                <option value="automne">Automne</option>
                <option value="hiver">Hiver</option>
            </select>
        </div>
    );
};

export default FilterBar;