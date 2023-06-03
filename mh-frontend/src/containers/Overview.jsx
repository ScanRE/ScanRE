import React, { useEffect } from 'react'
import Description from '../components/Description'
import DoughnutChart from '../components/DoughnutChart'
import ProgressBar from '../components/ProgressBar'

const Overview = ({ scanResData, scanError }) => {

    useEffect(() => {
      
    }, [])
    

    return (
        <div className="m-4 p-4">
            <Description />
            <div className='flex justify-evenly'>
                <DoughnutChart scanResData={scanResData} />
                <ProgressBar progress={60}/>
            </div>
        </div>
    );
};

export default Overview
