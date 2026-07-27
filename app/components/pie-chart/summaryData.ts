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
    pnl: "4237999.67",
    presentValue: "30977773.87",
    totalInvested: "26739774.20"
  },
  {
    assetClass: "DEBT",
    pnl: "1065671.15",
    presentValue: "9679572.10",
    totalInvested: "8613900.94"
  },
  {
    assetClass: "GOLD",
    pnl: "1959303.19",
    presentValue: "4392145.76",
    totalInvested: "2432842.57"
  },
  {
    assetClass: "LIQUID",
    pnl: "3630.73",
    presentValue: "1391550.08",
    totalInvested: "1387919.35"
  },
  {
    assetClass: "SILVER",
    pnl: "681158.06",
    presentValue: "1223388.03",
    totalInvested: "542229.97"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "230680.87",
    presentValue: "1175945.60",
    totalInvested: "945264.73"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "982237.35",
    totalInvested: "982237.35"
  },
  {
    assetClass: "HYBRID",
    pnl: "2021.96",
    presentValue: "278005.97",
    totalInvested: "275984.02"
  }
];
