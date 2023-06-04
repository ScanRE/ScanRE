import { Navbar } from "../../components";
import Historybox from "../../components/historybox/Historybox";
import './history.css'

function History({
    res = [
        {
            url: "https://github.com/JadenFurtado/ScanRE",
            lastScanned: "8",  
        },
        {
            url: "https://github.com/JadenFurtado/ScanRE",
            lastScanned: "8",  
        },
]   
}) {
    return ( 
        <>
            <Navbar />
            <div className="history">
                <h1 className="title gradient-text">
                    Past Scans
                </h1>
                <div className="history-panel">
                    {res.map((obj) => <Historybox url={obj.url} lastScanned={obj.lastScanned} />)}
                </div>
            </div>
        </>
     );
}

export default History;