import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.wrap}>
        <img className={css.images} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.descr}>@{tag}</p>
        <p className={css.descr}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.items}>
          <span>Followers</span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={css.items}>
          <span>Views</span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css.items}>
          <span>Likes</span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
