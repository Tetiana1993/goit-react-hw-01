import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.background} key={item.id}>
              <td className={css.item}>{item.type}</td>
              <td className={css.item}>{item.amount}</td>
              <td className={css.item}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
