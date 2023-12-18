const countries = {
  Any: "any",
  Australia: "au",
  Brazil: "br",
  Canada: "ca",
  China: "cn",
  Egypt: "eg",
  France: "fr",
  Germany: "de",
  Greece: "gr",
  HongKong: "hk",
  India: "in",
  Ireland: "ie",
  Israel: "il",
  Italy: "it",
  Japan: "jp",
  Netherlands: "nl",
  Norway: "no",
  Pakistan: "pk",
  Peru: "pe",
  Philippines: "ph",
  Portugal: "pt",
  Romania: "ro",
  Russia: "ru",
  Singapore: "sg",
  Spain: "es",
  Sweden: "se",
  Switzerland: "ch",
  Taiwan: "tw",
  Ukraine: "ua",
  "United Kingdom": "gb",
  "United States": "us",
};

const languages = {
  None: "none",
  Arabic: "ar",
  Chinese: "zh",
  Dutch: "nl",
  English: "en",
  French: "fr",
  German: "de",
  Greek: "el",
  Hebrew: "he",
  Hindi: "hi",
  Italian: "it",
  Japanese: "ja",
  Malayalam: "ml",
  Marathi: "mr",
  Norwegian: "no",
  Portuguese: "pt",
  Romanian: "ro",
  Russian: "ru",
  Spanish: "es",
  Swedish: "sv",
  Tamil: "ta",
  Telugu: "te",
  Ukrainia: "uk",
};

console.log(Object.keys(countries));

export default function SearchBar({ query, setQuery, fetchNews }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  const handleFetchNews = () => {
    fetchNews(query);
  };

  const filterByCountry = Object.keys(countries).map((item) => (
    <option key={countries[item]} value={countries[item]}>
      {[item]}
    </option>
  ));

  const filterByLanguage = Object.keys(languages).map((item) => (
    <option key={languages[item]} value={languages[item]}>
      {[item]}
    </option>
  ));
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search for bites:
        <input
          name="search"
          placeholder="bites"
          value={query}
          onChange={handleInputChange}
          className="block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
        />
      </label>
      <label>
        Country:
        <select>{filterByCountry}</select>
      </label>
      <label>
        Language:
        <select>{filterByLanguage}</select>
      </label>

      <button name="news" onClick={handleFetchNews}>
        Search News
      </button>
    </form>
  );
}
