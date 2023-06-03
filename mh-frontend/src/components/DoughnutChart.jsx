import { useEffect,useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const initialChartData = {
    labels: ["Critical", "High", "Medium", "Low", "Informational"],
    datasets: [
        {
            data: [0, 0, 0, 0, 0],
            backgroundColor: ["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#0000FF"],
        },
    ],
};
const options = {
    responsive: true,
};

const DoughnutChart = ({ scanResData }) => {

      const [chartData, setChartData] = useState(initialChartData);

    useEffect(() => {
        const occurrenceCounts = {
            CRITICAL: 0,
            HIGH: 0,
            MEDIUM: 0,
            LOW: 0,
            INFORMATIONAL: 0,
        };

        // Count the occurrences of each label
        scanResData.data.results.forEach((result) => {
            const impact = result.extra.metadata.impact;
            if (occurrenceCounts.hasOwnProperty(impact)) {
                occurrenceCounts[impact] += 1;
            }
        });

        // Update the data in the chartData
        const updatedData = {
            ...chartData,
            datasets: [
                {
                    ...chartData.datasets[0],
                    data: Object.values(occurrenceCounts),
                },
            ],
        };
        console.log(updatedData)
        setChartData(updatedData);
    }, []);


    return (
        <div className="border border-gray-500 shadow-xl rounded-lg p-4 w-full mr-4">
            <div className="flex items-center mb-2">
                <h2 className="text-lg font-semibold bg-primary text-white py-1 px-2 rounded">Risk chart</h2>
            </div>
            <div className="w-[50%] mx-auto">
                <Doughnut data={chartData} options={options} />
            </div>
        </div>
    );
};

export default DoughnutChart;
