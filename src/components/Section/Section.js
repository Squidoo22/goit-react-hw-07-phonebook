import s from './Section.module.css';

const Section = ({ children }) => (
  <section className={s.container}>{children}</section>
);

export default Section;
