import FormLaporanUser from "../components/FormLaporanGempa";
import PageHeader from "../components/PageHeader";

function ReportPage() {
  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto sm:px-6 lg:py-20 max-w-screen-xl px-6 py-12 sm:py-16">
          <PageHeader
            pageName="Earthquake Reports"
            pageDescription="Receive detailed reports on recent and past earthquakes, including magnitude, location, depth, and impact assessments. Our reports are designed to keep you informed and aware of seismic activities in your area and around the globe."
          />
          <FormLaporanUser />
        </div>
      </section>
    </main>
  );
}

export default ReportPage;
