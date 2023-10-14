import PropTypes from 'prop-types';
import css from '../css/Statistics.module.css';

const getRandomColor = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33F7', '#33AFFF'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map((stat, index) => (
          <li
            key={index}
            className={css.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
