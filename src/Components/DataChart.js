import React, { useEffect } from 'react';

const DataChart = ({symbol}) => {

    useEffect(() => {
        new window.TradingView.widget({
            "width": 980,
            "height": 610,
            "symbol": `${symbol}`,
            "interval": "D",
            "timezone": "America/Toronto",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": false,
            "container_id": "tradingview_99cf4"
        });
    });
    
    return (
        <>
        <div className="tradingview-widget-container">
        <div id="tradingview_99cf4"></div>
        <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener noreferrer" target="_blank"><span className="blue-text">{symbol} Chart</span></a> by TradingView</div>
        </div>
        </>
    )
};

export default DataChart;