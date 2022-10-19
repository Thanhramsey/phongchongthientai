import React from "react";
import PropTypes from "prop-types";
import { PivotData } from "Utilities";
export default function TableRenderer(props) {
  const {
    tableColorScaleGenerator,
    tableColorScaleGenerator,
    tableOptions,
  } = props;
  const pivotData = new PivotData(this.props);
  const colAttrs = pivotData.props.cols;
  const rowAttrs = pivotData.props.rows;
  const rowKeys = pivotData.getRowKeys();
  const colKeys = pivotData.getColKeys();
  const grandTotalAggregator = pivotData.getAggregator([], []);

  let valueCellColors = () => {};
  let rowTotalColors = () => {};
  let colTotalColors = () => {};
  if (opts.heatmapMode) {
    const colorScaleGenerator = this.props.tableColorScaleGenerator;
    const rowTotalValues = colKeys.map(x =>
      pivotData.getAggregator([], x).value()
    );
    rowTotalColors = colorScaleGenerator(rowTotalValues);
    const colTotalValues = rowKeys.map(x =>
      pivotData.getAggregator(x, []).value()
    );
    colTotalColors = colorScaleGenerator(colTotalValues);

    if (opts.heatmapMode === 'full') {
      const allValues = [];
      rowKeys.map(r =>
        colKeys.map(c =>
          allValues.push(pivotData.getAggregator(r, c).value())
        )
      );
      const colorScale = colorScaleGenerator(allValues);
      valueCellColors = (r, c, v) => colorScale(v);
    } else if (opts.heatmapMode === 'row') {
      const rowColorScales = {};
      rowKeys.map(r => {
        const rowValues = colKeys.map(x =>
          pivotData.getAggregator(r, x).value()
        );
        rowColorScales[r] = colorScaleGenerator(rowValues);
      });
      valueCellColors = (r, c, v) => rowColorScales[r](v);
    } else if (opts.heatmapMode === 'col') {
      const colColorScales = {};
      colKeys.map(c => {
        const colValues = rowKeys.map(x =>
          pivotData.getAggregator(x, c).value()
        );
        colColorScales[c] = colorScaleGenerator(colValues);
      });
      valueCellColors = (r, c, v) => colColorScales[c](v);
    }
  }

  const getClickHandler =
    this.props.tableOptions && this.props.tableOptions.clickCallback
      ? (value, rowValues, colValues) => {
          const filters = {};
          for (const i of Object.keys(colAttrs || {})) {
            const attr = colAttrs[i];
            if (colValues[i] !== null) {
              filters[attr] = colValues[i];
            }
          }
          for (const i of Object.keys(rowAttrs || {})) {
            const attr = rowAttrs[i];
            if (rowValues[i] !== null) {
              filters[attr] = rowValues[i];
            }
          }
          return e =>
            this.props.tableOptions.clickCallback(
              e,
              value,
              filters,
              pivotData
            );
        }
      : null;

  return (
    <table className="pvtTable">
      <thead>
        {colAttrs.map(function(c, j) {
          return (
            <tr key={`colAttr${j}`}>
              {j === 0 && rowAttrs.length !== 0 && (
                <th colSpan={rowAttrs.length} rowSpan={colAttrs.length} />
              )}
              <th className="pvtAxisLabel">{c}</th>
              {colKeys.map(function(colKey, i) {
                const x = spanSize(colKeys, i, j);
                if (x === -1) {
                  return null;
                }
                return (
                  <th
                    className="pvtColLabel"
                    key={`colKey${i}`}
                    colSpan={x}
                    rowSpan={
                      j === colAttrs.length - 1 && rowAttrs.length !== 0
                        ? 2
                        : 1
                    }
                  >
                    {colKey[j]}
                  </th>
                );
              })}

              {j === 0 && (
                <th
                  className="pvtTotalLabel"
                  rowSpan={
                    colAttrs.length + (rowAttrs.length === 0 ? 0 : 1)
                  }
                >
                  Totals
                </th>
              )}
            </tr>
          );
        })}

        {rowAttrs.length !== 0 && (
          <tr>
            {rowAttrs.map(function(r, i) {
              return (
                <th className="pvtAxisLabel" key={`rowAttr${i}`}>
                  {r}
                </th>
              );
            })}
            <th className="pvtTotalLabel">
              {colAttrs.length === 0 ? 'Totals' : null}
            </th>
          </tr>
        )}
      </thead>

      <tbody>
        {rowKeys.map(function(rowKey, i) {
          const totalAggregator = pivotData.getAggregator(rowKey, []);
          return (
            <tr key={`rowKeyRow${i}`}>
              {rowKey.map(function(txt, j) {
                const x = spanSize(rowKeys, i, j);
                if (x === -1) {
                  return null;
                }
                return (
                  <th
                    key={`rowKeyLabel${i}-${j}`}
                    className="pvtRowLabel"
                    rowSpan={x}
                    colSpan={
                      j === rowAttrs.length - 1 && colAttrs.length !== 0
                        ? 2
                        : 1
                    }
                  >
                    {txt}
                  </th>
                );
              })}
              {colKeys.map(function(colKey, j) {
                const aggregator = pivotData.getAggregator(rowKey, colKey);
                return (
                  <td
                    className="pvtVal"
                    key={`pvtVal${i}-${j}`}
                    onClick={
                      getClickHandler &&
                      getClickHandler(aggregator.value(), rowKey, colKey)
                    }
                    style={valueCellColors(
                      rowKey,
                      colKey,
                      aggregator.value()
                    )}
                  >
                    {aggregator.format(aggregator.value())}
                  </td>
                );
              })}
              <td
                className="pvtTotal"
                onClick={
                  getClickHandler &&
                  getClickHandler(totalAggregator.value(), rowKey, [null])
                }
                style={colTotalColors(totalAggregator.value())}
              >
                {totalAggregator.format(totalAggregator.value())}
              </td>
            </tr>
          );
        })}

        <tr>
          <th
            className="pvtTotalLabel"
            colSpan={rowAttrs.length + (colAttrs.length === 0 ? 0 : 1)}
          >
            Totals
          </th>

          {colKeys.map(function(colKey, i) {
            const totalAggregator = pivotData.getAggregator([], colKey);
            return (
              <td
                className="pvtTotal"
                key={`total${i}`}
                onClick={
                  getClickHandler &&
                  getClickHandler(totalAggregator.value(), [null], colKey)
                }
                style={rowTotalColors(totalAggregator.value())}
              >
                {totalAggregator.format(totalAggregator.value())}
              </td>
            );
          })}

          <td
            onClick={
              getClickHandler &&
              getClickHandler(grandTotalAggregator.value(), [null], [null])
            }
            className="pvtGrandTotal"
          >
            {grandTotalAggregator.format(grandTotalAggregator.value())}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
TableRenderer.propTypes = {
  tableColorScaleGenerator: PropTypes.func,
  tableColorScaleGenerator: PropTypes.func,
  tableOptions: PropTypes.object,
};
//TableRenderer.defaultProps = PivotData.defaultProps;
TableRenderer.propTypes = PivotData.propTypes;
//TableRenderer.defaultProps.tableColorScaleGenerator = redColorScaleGenerator;
//TableRenderer.defaultProps.tableOptions = {};
TableRenderer.propTypes.tableColorScaleGenerator = PropTypes.func;
TableRenderer.propTypes.tableOptions = PropTypes.object;
