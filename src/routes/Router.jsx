import React from 'react';
import { Home, Details, PageLayout, Form } from '../pages';
import { Route, Routes } from 'react-router-dom';

// J'utilise react-router-dom et non react-navigation car ce dernier est à utiliser de préférence avec react-native
const Router = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/formulaire" element={<Form />} />
      </Route>
    </Routes>
  );
};

export default Router;
