import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { NextResponse } from "next/server";

const US = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"]; // Example symbols
const ETFS = ["SPY", "QQQ", "VTI"];
const CAN = ["SHOP", "RY", "TD", "BAM"];
export async function GET(req: Request) {
	try {
		const usStockData = await Promise.all(
			US.map(async (symbol) => {
				const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`;
				const response = await axios.get(url);
				const data = response.data;
				return {
					symbol,
					price: data.c,
					change: data.d,
					changePercent: data.dp,
				};
			})
		);
		console.log(usStockData);
		const etfStockData = await Promise.all(
			ETFS.map(async (symbol) => {
				const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`;
				const response = await axios.get(url);
				const data = response.data;
				return {
					symbol,
					price: data.c,
					change: data.d,
					changePercent: data.dp,
				};
			})
		);
		console.log(etfStockData);
		const canStockData = await Promise.all(
			CAN.map(async (symbol) => {
				const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`;
				const response = await axios.get(url);
				const data = response.data;
				return {
					symbol,
					price: data.c,
					change: data.d,
					changePercent: data.dp,
				};
			})
		);
		console.log(canStockData);
		return NextResponse.json({
			status: 200,
			us: usStockData,
			etf: etfStockData,
			can: canStockData,
		});
	} catch (error) {
		console.error("Error fetching stock data:", error);
		return NextResponse.json({
			status: 400,
			error: "Failed to fetch stock data",
		});
	}
}
