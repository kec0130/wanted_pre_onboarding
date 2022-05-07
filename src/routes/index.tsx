import Toggle from '../components/Toggle'
import Tab from '../components/Tab'
import Slider from '../components/Slider'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'
import listOfCountries from '../data/countries'
import styles from './Routes.module.scss'

export default function App() {
  return (
    <div className={styles.background}>
      <main className={styles.mainContainer}>
        <Toggle options={['Overview', 'Details']} />
        <Tab tabs={['Windows', 'Mac', 'Linux']} />
        <Slider min={1} max={100} step={1} unit='%' labels={[1, 25, 50, 75, 100]} />
        <Input />
        <Dropdown category='Country' list={listOfCountries} />
      </main>
    </div>
  )
}
