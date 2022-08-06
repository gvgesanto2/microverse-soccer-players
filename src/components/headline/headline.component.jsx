import Logo from '../logo/logo.component';
import SeasonSelector from '../season-selector/season-selector.component';

import './headline.styles.scss';

export default function Headline() {
  return (
    <section className="headline">
      <header className="headline__header">
        <Logo />
        <p className="headline__text">
          All you need to know about the Premier League players!
        </p>
      </header>
      <SeasonSelector />
    </section>
  );
}
