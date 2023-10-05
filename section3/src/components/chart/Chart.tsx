import _ from 'lodash';
import './Chart.css';
import ChartBar from './ChartBar';


export interface ChartBarContent {
  value: number;
  label: string;
}

interface Props {
  contents: ChartBarContent[];
}

export default function Chart({ contents }: Props) {

  const maxValue = _.maxBy(contents, content => content.value)?.value ?? 0;

  return (
    <div className="chart">
      { contents.map(content => <ChartBar { ...content } maxValue={ maxValue }  />) }
    </div>
  );
}
