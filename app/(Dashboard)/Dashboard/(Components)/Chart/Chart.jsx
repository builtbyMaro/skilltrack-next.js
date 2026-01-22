import styles from "./Chart.module.css"

const BarChart = ({data, maxValue, range, rangeValue}) => {

    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartRanges}>
                {range.map((value, index) => (
                    <h4 key={index} className={styles.range}>{value}</h4>
                ))}
            </div>
            <div className={styles.bars}>
                {data.map((item, index) => (
                    <div key={index}>
                        <div className={styles.barContainer}>
                            <div className={styles.bar} style={{height: `${(item.value / maxValue) * 100}%`}}>
                            <div className={styles.barValue}>
                                <p>{`${item.value} ${rangeValue}`}</p>
                            </div>
                            </div>
                        </div>
                        <span className={styles.label}>W{index + 1}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BarChart;