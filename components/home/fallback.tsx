import React from 'react';
import DataTable from '../DataTable';

type TrendingFallbackRow = { id: number };
type CategoriesFallbackRow = { id: number };

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

export const CategoriesFallback = () => {
  const rows: CategoriesFallbackRow[] = Array.from({ length: 8 }, (_, index) => ({ id: index }));

  const columns: DataTableColumn<CategoriesFallbackRow>[] = [
    {
      header: 'Category',
      cellClassName: 'category-cell',
      cell: () => <div className='skeleton category-skeleton' />,
    },
    {
      header: 'Top Gainers',
      cellClassName: 'top-gainers-cell',
      cell: () => (
        <>
          <div className='skeleton coin-skeleton' />
          <div className='skeleton coin-skeleton' />
          <div className='skeleton coin-skeleton' />
        </>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-header-cell',
      cell: () => (
        <div className='change-cell'>
          <div className='skeleton value-skeleton-sm' />
          <div className='skeleton change-icon' />
        </div>
      ),
    },
    {
      header: 'Market Cap',
      cellClassName: 'market-cap-cell',
      cell: () => <div className='skeleton value-skeleton-md' />,
    },
    {
      header: '24h Volume',
      cellClassName: 'volume-cell',
      cell: () => <div className='skeleton value-skeleton-lg' />,
    },
  ];

  return (
    <div id='categories-fallback' className='custom-scrollbar'>
      <h4>Top Categories</h4>

      <DataTable
        columns={columns}
        data={rows}
        rowKey={(row) => row.id}
        tableClassName='mt-3'
      />
    </div>
  );
};
