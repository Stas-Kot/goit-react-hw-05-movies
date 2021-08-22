import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Spinner() {
  return (
    <div className={s.loader}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={999999999}
        radius={500}
      />
    </div>
  );
}
