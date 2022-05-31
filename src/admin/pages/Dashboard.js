import React from 'react';


const Dashboard = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card mb-0">
                    
                </div>
            </div>
        </div>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return (prevProps.location.pathname === nextProps.location.pathname) && (prevProps.colorMode === nextProps.colorMode);
};

export default React.memo(Dashboard, comparisonFn);
