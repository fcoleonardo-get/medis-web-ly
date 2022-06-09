import React from 'react';
import NavHome from "../Views/components/Navbar";
import MainHome from "../Views/components/MainHome";
import AccountForm from '../Views/AccountForm';

function Account() {
  return (
      <div>
      <NavHome />
      <MainHome >
          <AccountForm />
      </MainHome >
      </div>
  );
}

export default Account;