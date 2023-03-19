import React, { useState, useEffect } from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Engels', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'fe660257a5msh605283a05634a2bp12e460jsn150567d710ca',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            });
            const data = await response.json();
            console.log(data)
            setWeatherData(data);
        };
        fetchWeatherData();
    }, []);


    const getFormattedTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const getFormattedDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleDateString();
    };

    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px', width: '300px', textAlign: 'center' }}>
            {weatherData ? (
                <>
                    <div>{getFormattedDate(weatherData.location.localtime_epoch)}</div>
                    <div>{getFormattedTime(weatherData.location.localtime_epoch)}</div>
                    <p></p>
                    <p>{weatherData.current.location}</p>
                    <p>
                        <img
                            src={weatherData.current.condition.icon}
                        />
                        {weatherData.current.condition.text} {weatherData.current.temp_c} C
                    </p>
                    <p>
                        <WiFog /> {(weatherData.current.wind_kph / 3.6).toFixed(1)} м/с
                    </p>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default WeatherWidget;
