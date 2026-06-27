import { Routes, Route } from "react-router-dom";
import { QuoteProvider } from "@/components/site/QuoteCart";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import FranchisePage from "@/pages/FranchisePage";
import IndustriesPage from "@/pages/IndustriesPage";
import SolutionsPage from "@/pages/SolutionsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ROICalculatorPage from "@/pages/ROICalculatorPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <QuoteProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/roi-calculator" element={<ROICalculatorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </QuoteProvider>
  );
}
