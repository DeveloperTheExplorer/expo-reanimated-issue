import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
    relativeTime: {
        future: "in %s",
        past: "%s",
        s: 'just now',
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        M: "1mo",
        MM: "%dmo",
        y: "1y",
        yy: "%dy"
    }
});

export const ago = (date: number | Date) => {
    return dayjs(date).fromNow();
}

export const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * ref: https://stackoverflow.com/a/9462382/13450291
 * @param num number you want to format
 * @param digits number of decimal points wanted
 * @returns string | Example: 23.8K
 */
export const nFormatter = (num: number, digits = 1) => {
    const lookup = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'K' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'G' },
        { value: 1e12, symbol: 'T' },
        { value: 1e15, symbol: 'P' },
        { value: 1e18, symbol: 'E' }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup
        .slice()
        .reverse()
        .find(
            (item) => num >= item.value
        );

    return item ?
        (num / item.value)
            .toFixed(digits)
            .replace(rx, '$1') + item.symbol
        :
        '0';
}