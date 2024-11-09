// pages/index.js
import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import PriceDisplay from '../components/PriceDisplay';
import Charts from '../components/charts/Charts';
import data from '../data/database.json'; // le fichier database

const Home = () => {
    const [filteredData, setFilteredData] = useState(data);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleFilterChange = (season) => {
        if (season) {
            setFilteredData(data.filter(item => item.saison === season));
        } else {
            setFilteredData(data);
        }
    };

    useEffect(() => {
        const total = filteredData.reduce((acc, item) => acc + item.prix, 0);
        setTotalPrice(total);
    }, [filteredData]);

    // une mise à jour automatique des données
    useEffect(() => {
        const interval = setInterval(() => {
            // la logique pour mettre à jour les données
            console.log("Mise à jour des données...");
            // nouvelles données d'une API
        }, 5000); 

        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, []);

    return (
        <div>
            <h1>Tableau de Bord</h1>
            <FilterBar onFilterChange={handleFilterChange} />
            <PriceDisplay totalPrice={totalPrice} />
            <Charts data={filteredData} />
        </div>
    );
};

export default Home;