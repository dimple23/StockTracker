const CURRENCY = 'Realtime Currency Exchange Rate';
const FROM_CURRENCY_CODE = '1. From_Currency Code';
const FROM_CURRENCY_NAME = '2. From_Currency Name';
const TO_CURRENCY_CODE = '3. To_Currency Code';
const TO_CURRENCY_NAME = '4. To_Currency Name';
const EXCHANGE_RATE = '5. Exchange Rate';
const REFRESHED_AT = '6. Last Refreshed';
const TIME_ZONE = 'UTC';

export const parseData = (stockData) => {
    const pList = [];
    const dataList = stockData.data.dataset.data;

    dataList.forEach(data => {
        pList.unshift([parseInt(new Date(data[0]).getTime(), 10), data[4]]);
    })

    return {
        code: stockData.data.dataset.dataset_code,
        description: stockData.data.dataset.name,
        data: pList
    };
}

export const parseCurrencyData = (data) => {

    const dataList = data[CURRENCY];

    return {
        from_currency_code: dataList[FROM_CURRENCY_CODE],
        from_currency_name: dataList[FROM_CURRENCY_NAME],
        to_currency_code: dataList[TO_CURRENCY_CODE],
        to_currency_name: dataList[TO_CURRENCY_NAME],
        exchange_rate: dataList[EXCHANGE_RATE],
        refreshed_at: dataList[REFRESHED_AT],
        time_zone: dataList[TIME_ZONE]
    };
}
