import css from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img className={css.images} src={avatar} alt={name} width="48" />
      <p className={css.names}>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
