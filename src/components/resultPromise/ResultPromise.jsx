import React, { use } from 'react';
import ResultsChart from '../ResultsChart/ResultsChart';

const ResultPromise = ({resultData}) => {
    const results=use(resultData)

    return (
        <div>
            {
                results.map(result=> <ResultsChart key={result.id} result={result}></ResultsChart>)
            }
        </div>
    );
};

export default ResultPromise;