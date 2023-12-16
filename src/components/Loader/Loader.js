import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div className={css.Loader}>
  <ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=" #15afbd"
  innerCircleColor="#865c9e"
  middleCircleColor="#55afbd"
/>

  </div>
);

export default Loader;
