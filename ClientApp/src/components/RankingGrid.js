const RankingGrid = ({ items, imgArr }) => {
    const rankingGrid = [];
    const cellCollectionTopTier = [];
    const cellCollectionMiddleTier = [];
    const cellCollectionBottomTier = [];
    const cellCollectionWorstTier = [];

    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            var item = items.find(n => n.ranking === rankNum);
            cellCollection.push(<div id={`rank-${rankNum}`} className="rank-cell"></div>);
        }
        else {
            cellCollection.push(<div className="row-label">
                <h4>{rowLabel}</h4>
            </div>);
        }
    }

    function createCellsForRow(rowNum) {
        var rankNum = 0;
        var currCollection = [];
        var label = "";
        const numCells = 5;

        for (var a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTopTier;
                label = "Top Tier";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionMiddleTier;
                label = "Middle Tier";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionBottomTier;
                label = "Bottom Tier";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionWorstTier;
                label = "Worst Tier";
            }
            pushCellMarkupToArr(currCollection, rankNum, label);

        }

    }

    function createCellsForRows() {
        const maxRows = 4;
        for (var row = 1; row <= maxRows; row++) {
            createCellsForRow(row);
        }
    }

    function createRowsForGrid() {

        rankingGrid.push(<div className="rank-row top-tier">{cellCollectionTopTier}</div>);
        rankingGrid.push(<div className="rank-row middle-tier">{cellCollectionMiddleTier}</div>);
        rankingGrid.push(<div className="rank-row bottom-tier">{cellCollectionBottomTier}</div>);
        rankingGrid.push(<div className="rank-row worst-tier">{cellCollectionWorstTier}</div>);

        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsForGrid();
    }

    return (
        <div className="rankings">
            {createRankingGrid()}
        </div>
    );
}

export default RankingGrid;