import administrationImg from "../../assets/default-avatar.svg";
export const Administration = () => {
    return (
        <div className="header-administration">
          <img src={administrationImg} />
          <h2>
            <span className="span">Вы авторизованы</span>
            <span>Администратор</span>
          </h2>
        </div>
    );
};
