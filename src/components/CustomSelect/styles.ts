import { StylesConfig } from 'react-select';
import { CurrencyOption } from '../CustomSelect/CustomSelect';

export const selectStyles: StylesConfig<CurrencyOption> = {
  control: (base, state) => ({
    ...base,
    width: 73,
    padding: 5,
    borderRadius: 5,
    borderColor: state.isFocused
      ? 'rgba(238, 238, 238, 1)'
      : 'rgba(238, 238, 238, 1)',
    boxShadow: 'transparent',
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0 3px',
    textAlign: 'center',
    borderColor: 'rgba(238, 238, 238, 1)',
  }),
  menu: (base) => ({
    ...base,
    textAlign: 'center',
    borderRadius: 5,
  }),
  menuList: (base, state) => ({
    ...base,
    borderColor: state.focusedOption ? 'rgba(35, 201, 255, 1)' : 'transparent',
    borderRadius: 5,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? 'rgba(35, 201, 255, 1)'
      : state.isFocused
      ? 'rgba(35, 201, 255, 0.1)'
      : 'transparent',
    ':active': {
      ...base[':active'],
      backgroundColor: state.isDisabled
        ? state.isSelected
          ? 'rgba(35, 201, 255, 0.1)'
          : 'transparent'
        : 'rgba(35, 201, 255, 0.1)',
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: 'rgba(238, 238, 238, 1)',
    margin: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: 'rgba(238, 238, 238, 1)',
    padding: 0,
    cursor: 'pointer',
  }),
};
