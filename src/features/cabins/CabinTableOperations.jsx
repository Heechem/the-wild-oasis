import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
import TableOperations from '../../ui/TableOperations';

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-dsc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low to high' },
          { value: 'regularPrice-dsc', label: 'Sort by price (high to low' },
          { value: 'maxCapacity-asc', label: 'Sort by max capacity (low)' },
          { value: 'maxCapacity-dsc', label: 'Sort by max capacity (high)' },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
