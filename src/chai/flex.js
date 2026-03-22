export const flexStyles = {
  flex: { props: ['flexDirection'], unit: false },
  jc: { props: ['justifyContent'], unit: false },
  ai: { props: ['alignItems'], unit: false },
  gap: { props: ['gap'] },
};

// value maps
export const flexValues = {
  row: 'row',
  col: 'column',
};

export const justifyValues = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

export const alignValues = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
};
