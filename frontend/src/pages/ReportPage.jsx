import FormLaporanUser from "../components/FormLaporanGempa";
import PageHeader from "../components/PageHeader";

function ReportPage() {
  return (
    <main>
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <PageHeader
            pageName="Earthquake Reports"
            pageDescription="Receive detailed reports on recent and past earthquakes, including magnitude, location, depth, and impact assessments. Our reports are designed to keep you informed and aware of seismic activities in your area and around the globe."
          />
          <FormLaporanUser />
        </div>
      </div>
    </main>
  );
}

export default ReportPage;
