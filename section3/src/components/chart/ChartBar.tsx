import './ChartBar.css';

interface Props {
  value: number;
  label: string;
  maxValue: number;
}

export default function ChartBar({ value, label, maxValue }: Props) {

  const calculateHeightPercentage = () => {
    if(maxValue <= 0) return 0;
    return Math.round((value / maxValue) * 100);
  };

  const fillStyle = {
    height: `${calculateHeightPercentage()}%`
  };

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={ fillStyle }></div>
      </div>
      <div className="chart-bar__label">{ label }</div>
    </div>
  );
}
