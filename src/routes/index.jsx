export const Index = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href={`/contacts/1`}>Your Name</a>
          </li>
          <li>
            <a href={`/contacts/2`}>Your Friend</a>
          </li>
        </ul>
      </nav>

      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Tu Nombre"
              type="text"
              name="q"
            />
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Tu Password"
              type="password"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">Ingresar</button>
          </form>
        </div>
      </div>
      <div id="detail"></div>
    </>
  );
};
