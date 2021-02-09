import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { operations } from '../redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import s from './Views.module.css';

function PhonebookView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchAllContacts());
  }, []);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default PhonebookView;
