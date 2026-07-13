// Define the type for each asset class entry
export interface AssetData {
  assetClass: string;
  pnl: string;
  presentValue: string;
  totalInvested: string;
}

// Export the summary data as a constant
export const summary: AssetData[] = [
  {
    assetClass: "EQUITY",
    pnl: "4574462.27",
    presentValue: "31535394.75",
    totalInvested: "26960932.48"
  },
  {
    assetClass: "DEBT",
    pnl: "1118250.67",
    presentValue: "9652150.06",
    totalInvested: "8533899.40"
  },
  {
    assetClass: "GOLD",
    pnl: "1968385.76",
    presentValue: "4401228.33",
    totalInvested: "2432842.57"
  },
  {
    assetClass: "LIQUID",
    pnl: "2912.70",
    presentValue: "1289832.00",
    totalInvested: "1286919.30"
  },
  {
    assetClass: "SILVER",
    pnl: "667895.95",
    presentValue: "1210125.92",
    totalInvested: "542229.97"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "229292.93",
    presentValue: "1174557.66",
    totalInvested: "945264.73"
  },
  {
    assetClass: "HYBRID",
    pnl: "5868.31",
    presentValue: "273852.76",
    totalInvested: "267984.44"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "239363.02",
    totalInvested: "239363.02"
  }
];
