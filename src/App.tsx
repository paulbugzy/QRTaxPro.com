import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { AdBanner } from './components/AdBanner';
import { Home } from './pages/Home';
import { TaxSoftware } from './pages/TaxSoftware';
import { OnlinePayroll } from './pages/OnlinePayroll';
import { PayrollPage } from './pages/PayrollPage';
import { Training } from './pages/Training';
import { MyTaxAcademy } from './pages/MyTaxAcademy';
import { SoftOps } from './pages/SoftOps';
import { OnlineCECenter } from './pages/OnlineCECenter';
import { BankProducts } from './pages/BankProducts';
import { EPS } from './pages/EPS';
import { RefundAdvantage } from './pages/RefundAdvantage';
import { Marketing } from './pages/Marketing';
import { ProductPage } from './pages/ProductPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const showBreadcrumbs = location.pathname !== '/' && location.pathname !== '/404';

  return (
    <>
      <Header />
      {showBreadcrumbs && (
        <>
          <Breadcrumbs />
          <AdBanner />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tax-software" element={<TaxSoftware />} />
        <Route path="/training" element={<Training />} />
        <Route path="/training/mytaxacademy" element={<MyTaxAcademy />} />
        <Route path="/training/software" element={<SoftOps />} />
        <Route path="/training/ce-center" element={<OnlineCECenter />} />
        <Route path="/online-payroll" element={<OnlinePayroll />} />
        <Route path="/get-payroll" element={<PayrollPage />} />
        <Route path="/bank-products" element={<BankProducts />} />
        <Route path="/bank-products/eps" element={<EPS />} />
        <Route path="/bank-products/refund-advantage" element={<RefundAdvantage />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/marketing/products/:productId" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}