import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { DataTable, DataTableCell, DataTableRow, DataTablePagination } from 'material-bread';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      perPage: 2,
    }
  }
  render() {
    const data = [
      {
        name: 'Frozen Yogurt',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4',
      },
      {
        name: 'Ice Cream Sandwhich',
        calories: '237',
        fat: '9.0',
        carbs: '37',
        protein: '4.3',
      },
      {
        name: 'Blizzard',
        calories: '480',
        fat: '3.4',
        carbs: '80',
        protein: '1',
      },
      {
        name: 'Frosty',
        calories: '200',
        fat: '2.0',
        carbs: '12',
        protein: '8',
      },
      {
        name: 'DillyBar',
        calories: '120',
        fat: '15',
        carbs: '30',
        protein: '10',
      },
      {
        name: 'PushPop',
        calories: '50',
        fat: '1',
        carbs: '2',
        protein: '2',
      },
    ];

    return (
      <DataTable>
          <DataTableRow>
              <DataTableCell text={'Desert'} type={'header'} borderRight flex={2} />
              <DataTableCell text={'Calories'}  type={'header'}  right />
              <DataTableCell text={'Fat (g)'}  type={'header'}  right />
              <DataTableCell text={'Carbs (g)'}  type={'header'}  right />
              <DataTableCell text={'Protein (g)'}  type={'header'}  right />
          </DataTableRow>
          {data
            .slice(
              this.state.page * this.state.perPage,
              this.state.page * this.state.perPage + this.state.perPage,
            )
            .map(row => (
              <DataTableRow key={row.name}>
                <DataTableCell text={row.name} borderRight flex={2} />
                <DataTableCell text={row.calories} right />
                <DataTableCell text={row.fat} right />
                <DataTableCell text={row.carbs} right />
                <DataTableCell text={row.protein} right />
              </DataTableRow>
            ))}

          <DataTablePagination
            page={this.state.page}
            numberOfPages={data.length / this.state.perPage}
            numberOfRows={data.length}
            perPage={this.state.perPage}
            onChangePage={page => this.setState({ page: page })}
            onChangeRowsPerPage={perPage => this.setState({ perPage: perPage })}
            possibleNumberPerPage={[2,3,4,5, 6]}
          />
      </DataTable>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
