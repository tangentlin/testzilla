import { ExampleList } from './components/ExampleList';
import {
  buttonExamples,
  checkboxExamples,
  inputExamples,
  ratingExamples,
  selectExamples,
  switchExamples,
  textFieldExamples,
} from './examples';

interface IToc {
  label: string;
  path: string;
  ui: JSX.Element;
}

export const tocs: IToc[] = [
  {
    label: 'Button',
    path: '/button',
    ui: <ExampleList examples={buttonExamples} />,
  },
  {
    label: 'Checkbox',
    path: '/checkbox',
    ui: <ExampleList examples={checkboxExamples} />,
  },
  {
    label: 'Input',
    path: '/input',
    ui: <ExampleList examples={inputExamples} />,
  },
  {
    label: 'Rating',
    path: '/rating',
    ui: <ExampleList examples={ratingExamples} />,
  },
  {
    label: 'Select',
    path: '/select',
    ui: <ExampleList examples={selectExamples} />,
  },
  {
    label: 'Switch',
    path: '/switch',
    ui: <ExampleList examples={switchExamples} />,
  },
  {
    label: 'TextField',
    path: '/textfield',
    ui: <ExampleList examples={textFieldExamples} />,
  },
];