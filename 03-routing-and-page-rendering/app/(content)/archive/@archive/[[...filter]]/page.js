import Link from "next/link";
import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/backend";
import { Suspense } from "react";

async function FilteredHeader({ year, month }) {
  const years = await getAvailableNewsYears();
  const months = await getAvailableNewsMonths(year);

  if ((year && !years.includes(year)) || (month && !months.includes(month))) {
    throw new Error("Invalid filter.");
  }

  return (
    <header id="archive-header">
      <nav>
        {years && (
          <ul>
            {years.map((availableYear) => (
              <li key={availableYear}>
                <Link
                  href={`/archive/${availableYear}`}
                  className={year === availableYear ? "active" : undefined}
                >
                  {availableYear}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {months && (
          <ul>
            {months?.map((availableMonth) => (
              <li key={`${year}-${availableMonth}`}>
                <Link
                  href={`/archive/${year}/${availableMonth}`}
                  className={month === availableMonth ? "active" : undefined}
                >
                  {availableMonth}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  const news = await (async () => {
    if (year && month) return await getNewsForYearAndMonth(year, month);
    if (year) return await getNewsForYear(year);
    return undefined;
  })();

  return (
    <>
      {news && news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <p>No news found for the select period.</p>
      )}
    </>
  );
}

export default async function YearArchives({ params }) {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilteredHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Filtering news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
