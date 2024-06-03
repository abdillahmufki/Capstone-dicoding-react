import FormLaporanUser from "../components/FormLaporanGempa";

function LaporanPage() {
    return (
        <div className="max-w-screen-xl p-6 bg-white border border-gray-200 rounded-base shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">From Laporan Gempa</h1>
                <p className=" text-sm font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-24 dark:text-gray-400"> Laporkan Gempa Bumi yang terjadi di dekatmu karena laporanmu sangat berarti bagi semua orang.</p>
            </div>
            <FormLaporanUser />
        </div>
    );
}

export default LaporanPage;