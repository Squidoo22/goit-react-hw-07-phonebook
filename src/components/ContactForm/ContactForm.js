import { useState } from 'react';
import s from './ContactForm.module.css';
import shortid from 'shortid';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const telInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.block}>
        <div className={s.label}>
          <label className={s.formLabel} htmlFor={nameInputId}>
            Name
          </label>
        </div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          className={s.formInput}
        />
      </div>
      <div className={s.block}>
        <div className={s.label}>
          <label className={s.formLabel} htmlFor={telInputId}>
            Number
          </label>
        </div>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="+380 (00) 000-00-00"
          id={nameInputId}
          className={s.formInput}
        />
      </div>
      <div className={s.btnBlock}>
        <div>
          <button className={s.formBtn} type="submit">
            Add contact
          </button>
        </div>
      </div>
    </form>
  );
}
