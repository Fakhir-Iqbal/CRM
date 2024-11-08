"use client"; // This makes the component a client component

import * as React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';

interface CustomersFiltersProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CustomersFilters({ onChange }: CustomersFiltersProps): React.JSX.Element {
  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Search employee"
        startAdornment={
          <InputAdornment position="start">
            <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
          </InputAdornment>
        }
        onChange={onChange}  // Pass the onChange function directly without extra parentheses
        sx={{ maxWidth: '500px' }}
      />
    </Card>
  );
}
