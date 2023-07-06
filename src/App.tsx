import React, { useState } from 'react';
import { Paragraph } from './components/Paragraph';
import { AdminPage } from './pages/Admin/AdminProductsPage';

function App() {
  const [showAdminPage, setShowAdminPage] = useState(false);

  const handleClick = () => {
    setShowAdminPage(true);
  };

  return (
    <>
      <Paragraph text="Olá Mundo" />
      <button onClick={handleClick}>Abrir página de administração</button>

      {showAdminPage && <AdminPage />}
    </>
  );
}

export default App;
