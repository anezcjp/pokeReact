import Bar from './Bar'
import './PokeStatsData.css'


const PokeStatsBar = ({ stats }) => (
    <table>
        <tbody>
            {stats && stats.map((el) => (
                <tr key={el.stat.name}>
                    <td style={{ width: 100, minWidth: "150px" }}>
                        <Bar baseStat={el.base_stat} />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default PokeStatsBar