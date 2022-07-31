import plLogo from '../../assets/images/premier-league-1.svg';

import './logo.styles.scss';

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={plLogo} alt="" />
      <h2 className="logo__title">
        Players
        <br />
        Statistics
      </h2>
    </div>
  );
}
