import { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContex";
import { useTranslation } from "react-i18next";
import "../Styles/Form.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");

  const [errors, setErrors] = useState({});
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = t("name") + " " + t("isRequired");
    if (!email.trim()) newErrors.email = t("email") + " " + t("isRequired");
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = t("email") + " " + t("isInvalid");
    if (!password.trim())
      newErrors.password = t("password") + " " + t("isRequired");
    else if (password.length < 6)
      newErrors.password = t("password") + " " + t("mustBeAtLeast6Characters");
    if (!phone.trim()) newErrors.phone = t("phone") + " " + t("isRequired");
    else if (!/^\d{10}$/.test(phone))
      newErrors.phone = t("phone") + " " + t("isInvalid");
    if (!address.trim())
      newErrors.address = t("address") + " " + t("isRequired");
    if (!city.trim()) newErrors.city = t("city") + " " + t("isRequired");
    if (!state.trim()) newErrors.state = t("state") + " " + t("isRequired");
    if (!gender) newErrors.gender = t("gender") + " " + t("isRequired");

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log({ name, email, password, phone, address, city, state, gender });

    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
    setCity("");
    setState("");
    setGender("");
    setErrors({});
  };

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={`form-container ${theme ? "dark-theme" : "light-theme"}`}>
      <form onSubmit={handleSubmit} className="form">
        <button
          type="button"
          className="change-theme-btn"
          onClick={toggleTheme}
        >
          {theme ? (
            <CiLight style={{ color: "white" }} />
          ) : (
            <MdOutlineDarkMode style={{ color: "black" }} />
          )}
        </button>
        <label className="label">
          {t("Select Language")}
          <select onChange={changeLanguage} className="language-selector">
            <option value="en">English</option>
            <option value="es">Español(Spanish)</option>
            <option value="fr">Français(French)</option>
            <option value="de">Deutsch(German)</option>
            <option value="ar">العربية(Arabic)</option>
            <option value="hi">हिन्दी(Hindi)</option>
            <option value="bho">भोजपुरी(Bhojpuri)</option>
          </select>
        </label>
        <label className="label">
          {t("name")}
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label className="label">
          {t("email")}

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label className="label">
          {t("password")}
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>
        <label className="label">
          {t("phone")}

          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="input-field"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
        <label className="label">
          {t("address")}

          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="input-field"
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </label>
        <label className="label">
          {t("city")}
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="input-field"
          />
          {errors.city && <span className="error">{errors.city}</span>}
        </label>
        <label className="label">
          {t("state")}
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="input-field"
          />
          {errors.state && <span className="error">{errors.state}</span>}
        </label>
        <label className="label">
          {t("gender")}
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="input-field"
          >
            <option value="">{t("selectGender")}</option>
            <option value="male">{t("male")}</option>
            <option value="female">{t("female")}</option>
            <option value="other">{t("other")}</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </label>
        <div className="button-container">
          <button type="submit" className="submit-btn">
            {t("submit")}
          </button>
          <button className="clear-btn">{t("clear form")}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
