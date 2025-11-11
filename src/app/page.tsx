import styles from "./page.module.css";

type Quote = {
  text: string;
  author: string;
  context?: string;
};

const QUOTES: Quote[] = [
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    text: "What you do today can improve all your tomorrows.",
    author: "Ralph Marston",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C. S. Lewis",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery",
  },
  {
    text: "Small deeds done are better than great deeds planned.",
    author: "Peter Marshall",
  },
];

const formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
});

function getDailyQuote(date: Date): Quote {
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  const signature = `${year}-${month}-${day}`;
  let hash = 0;
  for (let i = 0; i < signature.length; i += 1) {
    hash = (hash * 31 + signature.charCodeAt(i)) & 0x7fffffff;
  }
  const index = hash % QUOTES.length;
  return QUOTES[index];
}

export default function Home() {
  const today = new Date();
  const quote = getDailyQuote(today);
  const displayDate = formatter.format(today);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.date}>{displayDate}</p>
          <h1 className={styles.heading}>Quote of the Day</h1>
          <p className={styles.tagline}>
            A fresh line of inspiration, curated for the present moment.
          </p>
        </header>
        <section className={styles.quoteCard}>
          <blockquote className={styles.quoteBody}>
            <p>“{quote.text}”</p>
          </blockquote>
          <cite className={styles.quoteAuthor}>— {quote.author}</cite>
          {quote.context ? (
            <p className={styles.quoteContext}>{quote.context}</p>
          ) : null}
        </section>
        <footer className={styles.footer}>
          <p>
            Bookmark this page and check back tomorrow for a new perspective.
          </p>
        </footer>
      </main>
    </div>
  );
}
