export const NAV_ITEMS = [
    { href: '/', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
    // { href: '/watchlist', label: 'Watchlist' },
];

// Sign-up form select options
export const INVESTMENT_GOALS = [
    { value: 'Growth', label: 'Growth' },
    { value: 'Income', label: 'Income' },
    { value: 'Balanced', label: 'Balanced' },
    { value: 'Conservative', label: 'Conservative' },
];

export const RISK_TOLERANCE_OPTIONS = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
];

export const PREFERRED_INDUSTRIES = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Consumer Goods', label: 'Consumer Goods' },
];

export const ALERT_TYPE_OPTIONS = [
    { value: 'upper', label: 'Upper' },
    { value: 'lower', label: 'Lower' },
];

export const CONDITION_OPTIONS = [
    { value: 'greater', label: 'Greater than (>)' },
    { value: 'less', label: 'Less than (<)' },
];

// TradingView Charts
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: 'dark', // dark mode
    dateRange: '12M', // last 12 months
    locale: 'en', // language
    largeChartUrl: '', // link to a large chart if needed
    isTransparent: true, // makes background transparent
    showFloatingTooltip: true, // show tooltip on hover
    plotLineColorGrowing: '#0FEDBE', // line color when price goes up
    plotLineColorFalling: '#0FEDBE', // line color when price falls
    gridLineColor: 'rgba(240, 243, 250, 0)', // grid line color
    scaleFontColor: '#DBDBDB', // font color for scale
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)', // fill under line when growing
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)', // fill under line when falling
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)', // highlight color for active symbol
    tabs: [
          {
              "title": "Financials",
              "symbols": [
                {
                  "s": "BSE:HDFCBANK",
                  "d": "HDFC Bank",
                  "logoid": "hdfc-bank",
                  "currency-logoid": "country/IN"
                },
                {
                  "s": "BSE:ICICIBANK",
                  "d": "ICICI Bank",
                  "logoid": "icici-bank",
                  "currency-logoid": "country/IN"
                },
                {
                  "s": "BSE:SBIN",
                  "d": "State Bank Of India",
                  "logoid": "state-bank",
                  "currency-logoid": "country/IN"
                },
                  {
                  "s": "BSE:BAJFINANCE",
                  "d": "Bajaj Finance",
                  "logoid": "bajaj-finance",
                  "currency-logoid": "country/IN"
                },
                {
                  "s": "BSE:SHRIRAMFIN",
                  "d": "ShriRam Finance",
                  "logoid": "shriram",
                  "currency-logoid": "country/IN"
                }
              ]
            },
      {
              "title": "Technology",
              "symbols": [
                {
                  "s": "BSE:INFY",
                  "d": "Infosis",
                  "logoid": "infosys",
                  "currency-logoid": "country/IN"
                },
                {
                  "s": "BSE:TCS",
                  "d": "Tata Consultancy Services",
                  "logoid": "tata",
                  "currency-logoid": "country/IN"
                },
                {
                  "s": "BSE:ZENSARTECH",
                  "d": "Zensar Technology",
                  "logoid": "zensar-technologies",
                  "currency-logoid": "country/IN"
                },
                {
                  "s": "BSE:PERSISTENT",
                  "d": "Persistent",
                  "logoid": "persistent-systems-ltd",
                  "currency-logoid": "country/IN"
                },
                {
                  "s": "BSE:KPITTECH",
                  "d": "KPIT Technology",
                  "logoid": "kpit-technologies",
                  "currency-logoid": "country/IN"
                }
              ]
            },
        {
              "title": "Pharma",
              "symbols": [
                {
                  "s": "BSE:MANKIND",
                  "d": "Mankind Pharma",
                  "logoid": "mankind-pharma-limited",
                  "currency-logoid": "country/IN"
                },
                {
                  "s": "BSE:ASTRAZEN",
                  "d": "Astrazeneca Pharma",
                  "logoid": "astrazeneca",
                  "currency-logoid": "country/IN"
                },
                {
                  "s": "BSE:MAXIND",
                  "d": "Max India Ltd",
                  "logoid": "max-estates-ltd",
                  "currency-logoid": "country/IN"
                },
                {
                  "s": "BSE:AARTIDRUGS",
                  "d": "Aarti Drugs",
                  "logoid": "aarti-drugs",
                  "currency-logoid": "country/IN"
                }
              ]
            }
    ],
    support_host: 'https://www.tradingview.com', // TradingView host
    backgroundColor: '#141414', // background color
    width: '100%', // full width
    height: 600, // height in px
    showSymbolLogo: true, // show logo next to symbols
    showChart: true, // display mini chart
};

export const HEATMAP_WIDGET_CONFIG = {
    dataSource: 'SENSEX',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    grouping: 'sector',
    isTransparent: true,
    locale: 'en',
    symbolUrl: '',
    colorTheme: 'dark',
    exchanges: [],
    hasTopBar: false,
    isDataSetEnabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    isMonoSize: false,
    width: '100%',
    height: '600',
};

export const TOP_STORIES_WIDGET_CONFIG = {
    displayMode: 'regular',
    feedMode: 'market',
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    market: 'stock',
    width: '100%',
    height: '600',
};

export const MARKET_DATA_WIDGET_CONFIG = {
    title: 'Stocks',
    width: '100%',
    height: 600,
    locale: 'en',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',
    symbolsGroups: [
        {
              "name": "Financials",
              "symbols": [
                {
                  "name": "BSE:HDFCBANK",
                  "displayName": "HDFC Bank"
                },
                {
                  "name": "BSE:ICICIBANK",
                  "displayName": "ICICI Bank"
                },
                {
                  "name": "BSE:SBIN",
                  "displayName": "State Bank Of India"
                },
                {
                  "name": "BSE:BAJFINANCE",
                  "displayName": "Bajaj Finance"
                },
                {
                  "name": "BSE:SHRIRAMFIN",
                  "displayName": "ShriRam Finance"
                }
              ]
            },
              {
              "name": "Technology",
              "symbols": [
                {
                  "name": "BSE:INFY",
                  "displayName": "Infosys"
                },
                {
                  "name": "BSE:TCS",
                  "displayName": "Tata Consultancy Services"
                },
                {
                  "name": "BSE:ZENSARTECH",
                  "displayName": "Zensar Technology"
                },
                {
                  "name": "BSE:PERSISTENT",
                  "displayName": "Persistent"
                },
                {
                  "name": "BSE:KPITTECH",
                  "displayName": "KPIT Technology"
                }
              ]
            },
            {
              "name": "Pharma",
              "symbols": [
                {
                  "name": "BSE:MANKIND",
                  "displayName": "Mankind Pharma"
                },
                {
                  "name": "BSE:ASTRAZEN",
                  "displayName": "Astrazeneca Pharma"
                },
                {
                  "name": "BSE:MAXIND",
                  "displayName": "Max India Ltd"
                },
                {
                  "name": "BSE:AARTIDRUGS",
                  "displayName": "Aarti Drugs"
                }
              ]
            },
    ],
};

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    width: '100%',
    height: 170,
});

export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: true,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 1,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const BASELINE_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 10,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 400,
    interval: '1h',
    largeChartUrl: '',
});

export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 440,
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 464,
    displayMode: 'regular',
    largeChartUrl: '',
});

export const POPULAR_STOCK_SYMBOLS = [
    // Tech Giants (the big technology companies)
    'AAPL',
    'MSFT',
    'GOOGL',
    'AMZN',
    'TSLA',
    'META',
    'NVDA',
    'NFLX',
    'ORCL',
    'CRM',

    // Growing Tech Companies
    'ADBE',
    'INTC',
    'AMD',
    'PYPL',
    'UBER',
    'ZOOM',
    'SPOT',
    'SQ',
    'SHOP',
    'ROKU',

    // Newer Tech Companies
    'SNOW',
    'PLTR',
    'COIN',
    'RBLX',
    'DDOG',
    'CRWD',
    'NET',
    'OKTA',
    'TWLO',
    'ZM',

    // Consumer & Delivery Apps
    'DOCU',
    'PTON',
    'PINS',
    'SNAP',
    'LYFT',
    'DASH',
    'ABNB',
    'RIVN',
    'LCID',
    'NIO',

    // International Companies
    'XPEV',
    'LI',
    'BABA',
    'JD',
    'PDD',
    'TME',
    'BILI',
    'DIDI',
    'GRAB',
    'SE',
];

export const NO_MARKET_NEWS =
    '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
    'Company',
    'Symbol',
    'Price',
    'Change',
    'Market Cap',
    'P/E Ratio',
    'Alert',
    'Action',
];