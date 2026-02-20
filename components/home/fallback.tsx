import React from 'react';
import DataTable from '../DataTable';

type TrendingFallbackRow = { id: number };

export const CoinOverviewFallback = () => {
  return (
    <div id='coin-overview-fallback'>
      <div className='header pt-2'>
        <div className='skeleton header-image' />

        <div className='info'>
          <div className='skeleton header-line-sm' />
          <div className='skeleton header-line-lg' />
        </div>
      </div>

      <div className='flex gap-2 pb-2'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className='skeleton period-button-skeleton' />
        ))}
      </div>

      <div className='chart pb-2'>
        <div className='skeleton chart-skeleton' />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const rows: TrendingFallbackRow[] = Array.from({ length: 6 }, (_, index) => ({ id: index }));

  const columns: DataTableColumn<TrendingFallbackRow>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className='name-link'>
          <div className='skeleton name-image' />
          <div className='skeleton name-line' />
        </div>
      ),
    },
    {
      header: '24h change',
      cellClassName: 'change-cell',
      cell: () => (
        <div className='price-change'>
          <div className='skeleton change-icon' />
          <div className='skeleton change-line' />
        </div>
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => <div className='skeleton price-line' />,
    },
  ];

  return (
    <div id='trending-coins-fallback'>
      <h4>Trending Coins</h4>

      <DataTable
        data={rows}
        columns={columns}
        rowKey={(row) => row.id}
        tableClassName='trending-coins-table'
        headerCellClassName='py-3!'
        bodyCellClassName='py-2!'
      />
    </div>
  );
};
