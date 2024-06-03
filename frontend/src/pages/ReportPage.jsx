import FormLaporanUser from "../components/FormLaporanGempa";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import PageHeader from "../components/PageHeader";

function ReportPage() {
  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-900  mt-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <PageHeader
            pageName="Earthquake Reports"
            pageDescription="Receive detailed reports on recent and past earthquakes, including magnitude, location, depth, and impact assessments. Our reports are designed to keep you informed and aware of seismic activities in your area and around the globe."
          />
          <FormLaporanUser />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReportPage;
